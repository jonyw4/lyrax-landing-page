import { createContext } from "react";
import { CompanyRepository } from "../../domain/repository/CompanyRepository";

// @ts-ignore
export const CompanyRepositoryContext = createContext<CompanyRepository>({});

