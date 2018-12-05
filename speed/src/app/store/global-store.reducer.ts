import { GlobalActions, GlobalActionTypes } from './global-store.actions';

export function globalStoreReducer(state: any, action: GlobalActions): any {

    const result = { ...state };
    
    switch (action.type) {
        case GlobalActionTypes.LoadCriteriaResults:
            result.criteriaResults = action.payload;
            break;
        case GlobalActionTypes.LoadLaunches:
            result.launches = action.payload;
            break;
    }

    return result;
}