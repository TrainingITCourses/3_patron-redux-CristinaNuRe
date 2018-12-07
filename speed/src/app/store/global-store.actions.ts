export enum GlobalActionTypes {
    LoadAgencies,
    LoadLaunchStatus,
    LoadMissionTypes,
    LoadLaunches
}

export interface Action {
    readonly type: GlobalActionTypes;
    readonly payload: any;
}

export class LoadAgencies implements Action {
    public readonly type = GlobalActionTypes.LoadAgencies;
    constructor(public readonly payload: any[]) {}
}

export class LoadLaunchStatus implements Action {
    public readonly type = GlobalActionTypes.LoadLaunchStatus;
    constructor(public readonly payload: any[]) {}
}

export class LoadMissionTypes implements Action {
    public readonly type = GlobalActionTypes.LoadMissionTypes;
    constructor(public readonly payload: any[]) {}
}

export class LoadLaunches implements Action {
    public readonly type = GlobalActionTypes.LoadLaunches;
    constructor(public readonly payload: any[]) {}
}

export type GlobalActions = LoadAgencies 
    | LoadLaunchStatus 
    | LoadMissionTypes 
    | LoadLaunches;