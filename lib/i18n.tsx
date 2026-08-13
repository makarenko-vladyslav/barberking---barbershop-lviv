"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import content from "@/lib/content.json";

interface I18nContextType {
  locale: string;
  setLocale: (l: string) => void;
  t: (path: string) => string;
  getObject: <T>(path: string) => T | null;
}

const LocaleContext = createContext<I18nContextType>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: (path: string) => path,
  getObject: () => null,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(content.defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("barberking_locale");
    if (saved && saved !== content.defaultLocale) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("barberking_locale", l);
    }
  }, []);

  const getRawValue = useCallback(
    (path: string, currentLocale: string) => {
      const keys = path.split(".");
      const locales = content.locales as Record<string, Record<string, unknown>>;
      let val: unknown = locales[currentLocale];
      for (const k of keys) {
        if (val && typeof val === "object" && k in (val as Record<string, unknown>)) {
          val = (val as Record<string, unknown>)[k];
        } else {
          val = undefined;
          break;
        }
      }
      return val;
    },
    []
  );

  const t = useCallback(
    (path: string): string => {
      let val = getRawValue(path, locale);
      if (val === undefined) {
        val = getRawValue(path, content.defaultLocale);
      }
      if (typeof val === "string") return val;
      if (typeof val === "number") return String(val);
      return path;
    },
    [locale, getRawValue]
  );

  const getObject = useCallback(
    <T,>(path: string): T | null => {
      let val = getRawValue(path, locale);
      if (val === undefined) {
        val = getRawValue(path, content.defaultLocale);
      }
      if (val && typeof val === "object") return val as T;
      return null;
    },
    [locale, getRawValue]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, getObject }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
