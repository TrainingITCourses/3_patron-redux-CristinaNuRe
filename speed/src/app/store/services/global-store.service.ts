import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalActions, GlobalActionTypes } from '../global-store.actions';
import { globalStoreReducer } from '../global-store.reducer';
import { Global, globalInitialState } from '../models/global';

@Injectable({
    providedIn: 'root'
})

export class GlobalStoreService {

    private state: Global = { ...globalInitialState };
    private criteriaResults$ = new BehaviorSubject<any>(this.state.criteriaResults);
    private launches$ = new BehaviorSubject<any>(this.state.launches);

    constructor() {};

    public dispatch = (action: GlobalActions) => {
        this.state = globalStoreReducer(this.state, action);

        switch(action.type) {
            case GlobalActionTypes.LoadCriteriaResults:
                this.criteriaResults$.next(this.getSnapshot(GlobalSlideTypes.criteriaResults));
                break;
            case GlobalActionTypes.LoadLaunches:
                this.launches$.next(this.getSnapshot(GlobalSlideTypes.launches));
                break;
        }        
    }

    public getSnapshot = (slice: GlobalSlideTypes) => {

        switch(slice) {
            case GlobalSlideTypes.criteriaResults:
                return [... this.state.criteriaResults];
            case GlobalSlideTypes.launches:
                return [... this.state.launches];
        }
    };

    public select$ = (slice: GlobalSlideTypes) => {

        switch(slice) {
            case GlobalSlideTypes.criteriaResults:
                return this.criteriaResults$.asObservable();
            case GlobalSlideTypes.launches:
                return this.launches$.asObservable();
        }
    };
}

export enum GlobalSlideTypes {
    criteriaResults,
    launches
}

