import { useContext } from "react";
import { CompanyRepositoryContext } from "../_contexts";

export const useCompany = () => useContext(CompanyRepositoryContext);