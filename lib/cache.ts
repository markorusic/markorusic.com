import NodeCache from 'node-cache';
import { createCache } from './cache-factory';

const inMemoryCache = new NodeCache();

export const cache = createCache({
  get: async (key) => {
    const rawValue = inMemoryCache.get(key) as string;
    if (rawValue) {
      const parsedValue = JSON.parse(rawValue);
      return parsedValue;
    }
    return null;
  },
  set: async (key, value) => inMemoryCache.set(key, JSON.stringify(value)),
  delete: async (key) => inMemoryCache.del(key)
});
