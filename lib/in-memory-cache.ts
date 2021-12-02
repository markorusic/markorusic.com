import NodeCache from 'node-cache';
import { CacheClient, createCache } from './cache-factory';

const nodeCache = new NodeCache();

export const inMemoryCacheClient: CacheClient = {
  get: async (key) => {
    const rawValue = nodeCache.get(key) as string;
    if (rawValue) {
      const parsedValue = JSON.parse(rawValue);
      return parsedValue;
    }
    return null;
  },
  set: async (key, value) => nodeCache.set(key, JSON.stringify(value)),
  delete: async (key) => nodeCache.del(key)
};

export const inMemoryCache = createCache(inMemoryCacheClient);
