export enum GlobalActionTypes {
    LoadCriteriaResults,
    LoadLaunches
}

export interface Action {
    readonly type: GlobalActionTypes;
    readonly payload?: any;
}

export class LoadCriteriaResults implements Action {
    public type = GlobalActionTypes.LoadCriteriaResults;
    constructor(public readonly payload: any[]) {}
}

export class LoadLaunches implements Action {
    public type = GlobalActionTypes.LoadLaunches;
    constructor(public readonly payload: any[]) {}
}

export type GlobalActions = LoadCriteriaResults | LoadLaunches;