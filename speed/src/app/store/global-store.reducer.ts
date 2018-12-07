import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalInitialState, Global } from './models/global';

export function globalStoreReducer(
    state = globalInitialState, action: GlobalActions): Global {

    const result = { ...state };
    
    switch (action.type) {
        case GlobalActionTypes.LoadAgencies:
            result.agencies = action.payload;
            break;
        case GlobalActionTypes.LoadLaunchStatus:
            result.launchStatus = action.payload;
            break;
        case GlobalActionTypes.LoadMissionTypes:
            result.missionTypes = action.payload;
            break;
        case GlobalActionTypes.LoadLaunches:
            result.launches = action.payload;
            break;
    }

    return result;
}