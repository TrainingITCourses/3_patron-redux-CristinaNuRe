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
    private agencies$ = new BehaviorSubject<any>(this.state.agencies);
    private launchStatus$ = new BehaviorSubject<any>(this.state.launchStatus);
    private missionTypes$ = new BehaviorSubject<any>(this.state.missionTypes);
    private launches$ = new BehaviorSubject<any>(this.state.launches);

    constructor() {};

    public dispatch = (action: GlobalActions) => {
        console.log('dispatching...', action);
        this.state = globalStoreReducer(this.state, action);

        switch(action.type) {
            case GlobalActionTypes.LoadAgencies:
                this.agencies$.next([...this.state.agencies]);
                break;
            case GlobalActionTypes.LoadLaunchStatus:
                this.launchStatus$.next([...this.state.launchStatus]);
                break;
            case GlobalActionTypes.LoadMissionTypes:
                this.missionTypes$.next([...this.state.missionTypes]);
                break;                
            case GlobalActionTypes.LoadLaunches:
                this.launches$.next([...this.state.launches]);
                break;
        }        
    }

    public getSnapshot = (slice: GlobalSlideTypes) => {

        switch(slice) {
            case GlobalSlideTypes.agencies:
                return [... this.state.agencies];
            case GlobalSlideTypes.launchStatus:
                return [... this.state.launchStatus];
            case GlobalSlideTypes.missionTypes:
                return [... this.state.missionTypes];                
            case GlobalSlideTypes.launches:
                return [... this.state.launches];
        }
    };

    public select$ = (slice: GlobalSlideTypes) => {

        switch(slice) {
            case GlobalSlideTypes.agencies:
                return this.agencies$.asObservable();
            case GlobalSlideTypes.launchStatus:
                return this.launchStatus$.asObservable();
            case GlobalSlideTypes.missionTypes:
                return this.missionTypes$.asObservable();                
            case GlobalSlideTypes.launches:
                return this.launches$.asObservable();
        }
    };
}

export enum GlobalSlideTypes {
    agencies,
    launchStatus,
    missionTypes,
    launches
}

