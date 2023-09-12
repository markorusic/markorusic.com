import Redis from 'ioredis';
import { CacheClient, createCache } from './cache-factory';

const redis = new Redis(process.env.REDIS_URL ?? undefined);

export const cacheClient: CacheClient = {
  get: async (key) => {
    const rawValue = await redis.get(key);
    if (rawValue) {
      const parsedValue = JSON.parse(rawValue);
      return parsedValue;
    }
    return null;
  },
  set: async (key, value) => redis.set(key, JSON.stringify(value)),
  delete: (key) => redis.del(key)
};

export const cache = createCache(cacheClient);
