import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import localforage from "localforage";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const safeJSON = {
  parse: (str: string) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  },

  stringify: (obj: string | string[] | object) => {
    try {
      return JSON.stringify(obj);
    } catch (e) {
      return "";
    }
  },
};

export const cacheValue = (
    key: string,
    value: any,
    ttl: number = 30 * 24 * 60 * 1000
  ) => {
    localforage.setItem(
      key,
      safeJSON.stringify({
        value,
        ttl: Date.now() + (ttl || 30 * 1000),
      })
    );
  };

export const clearCache = (key: string) => {
  localforage.removeItem(key);
};

export const getValueFromCache = async (key: string) => {
  const value: string = (await localforage.getItem(key)) || "";
  if (!value) return;
  const { ttl, value: _value } = safeJSON.parse(value);
  if (Date.now() > ttl) {
    clearCache(key);
    return;
  }
  return _value;
};
