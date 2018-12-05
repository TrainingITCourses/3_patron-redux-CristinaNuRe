import { Launch } from "./launch";

export interface Global {
    criteriaResults: any[];
    launches: Launch[];
  }
  
  export const globalInitialState: Global = {
    criteriaResults: [],
    launches: []
  };