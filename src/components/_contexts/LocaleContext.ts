import { createContext } from "react";

export interface LocaleContext {
  locale: string;
  setLocale: (locale: string) => void;
}

// @ts-ignore
export const LocaleContext = createContext<LocaleContext>();
