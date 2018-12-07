import { Launch } from "./launch";
import { Agency } from "./agency";
import { Status } from "./status";

export interface Global {
    agencies: Agency[];
    launchStatus: Status[];
    missionTypes: any[];
    launches: Launch[];
  }
  
  export const globalInitialState: Global = {
    agencies: [],
    launchStatus: [],
    missionTypes: [],    
    launches: []
  };