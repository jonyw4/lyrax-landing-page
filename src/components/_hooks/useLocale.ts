import { useContext } from "react";
import { LocaleContext } from "../_contexts";

export const useLocale = () => useContext(LocaleContext);
