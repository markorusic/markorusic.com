export type CacheKey = (string | number | boolean | undefined)[];
export type CacheMetadata = { createdAt: number; ttl: number | null };
export type CacheValue<T> = { metadata: CacheMetadata; value: T };

export interface CacheClient {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<any>;
  delete(key: string): Promise<any>;
}

export interface CacheOptions<T> {
  key: CacheKey;
  fetchFn: () => Promise<T>;
  ttl?: number;
  enabled?: boolean;
}

function assertCacheValue<T>(
  entry: unknown,
  key: string
): asserts entry is CacheValue<T> {
  if (typeof entry !== 'object' || entry === null) {
    throw new Error(
      `Cache entry for ${key} is not a cache entry object, it's a ${typeof entry}`
    );
  }
  if (!('metadata' in entry)) {
    throw new Error(`Cache entry for ${key} does not have a metadata property`);
  }
  if (!('value' in entry)) {
    throw new Error(`Cache entry for ${key} does not have a value property`);
  }
}

const log = (message: string) => {
  const isServer = typeof window === 'undefined';
  if (isServer && process.env.NODE_ENV === 'development') {
    console.log(message);
  }
};

export const getCacheKey = (keyParts: CacheKey) => keyParts.join('-');

export const createCache = (client: CacheClient) => {
  const keysRefreshing = new Set<string>();

  return {
    get: async <T>({ ttl, enabled = true, ...options }: CacheOptions<T>) => {
      if (!enabled) {
        return options.fetchFn();
      }

      const key = getCacheKey(options.key);
      log(`\n--------------------CAHCE: "${key}"--------------------\n`);

      const refreshValue = async () => {
        log(`Fetching fresh value for "${key}"...`);
        const value = await options.fetchFn();
        const cacheValue: CacheValue<T> = {
          value,
          metadata: { ttl: ttl ?? null, createdAt: Date.now() }
        };
        await client.set(key, cacheValue);
        log(`Fresh value "${key}" set to cache`);
        return cacheValue;
      };

      try {
        const cacheValue = await client.get<T>(key);
        if (cacheValue) {
          log(`Got ${key} value from cache`);
          assertCacheValue<T>(cacheValue, key);
          const { value, metadata } = cacheValue;

          const isExpired =
            metadata.ttl && Date.now() > metadata.createdAt + metadata.ttl;

          log(
            `"${key}" parsed and validated, expiring in: ${
              metadata.ttl
                ? (metadata.createdAt + metadata.ttl - Date.now()) / 1000 + 's'
                : 'never'
            }`
          );

          if (isExpired && !keysRefreshing.has(key)) {
            log(`"${key}" expired, refreshing...`);
            // refresh async, and return stale value
            // keep track of refreshing keys to avoid refreshing key multiple times simultaneously
            keysRefreshing.add(key);
            refreshValue().finally(() => {
              keysRefreshing.delete(key);
            });
          }

          log(`Returning "${key}" value from cache`);

          return value;
        }
      } catch (err) {
        log(
          `Something went wrong while getting "${key}" from cache, deleting it...`
        );
        await client.delete(key);
      }

      const { value } = await refreshValue();
      log(`Returning fresh "${key}" value`);
      return value;
    },
    delete: (cacheKey: CacheKey) => {
      const key = getCacheKey(cacheKey);
      return client.delete(key);
    }
  };
};
