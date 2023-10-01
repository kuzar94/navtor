import {createReducer, on} from '@ngrx/store';
import {errorState, loadedState, loadingState, StateModel} from '../../models/state.model';
import {initialEmissionsState} from './emissions.state';
import {emissionsEmpty, emissionsLoaded, loadEmissions, loadEmissionsFailed, selectEmission} from "./emissions.actions";
import {EmissionModel} from '../../models/emission.model';

export const emissionsReducer = createReducer(
    initialEmissionsState,
    on(loadEmissions, (state, {data}) => ({
        ...state,
        emissions: loadingState(data),
        selectedEmissionId: null,
    })),
    on(emissionsLoaded, (state, {data}) => ({
        ...state,
        emissions: loadedState(data),
        selectedEmissionId: state.selectedEmissionId,
    })),
    on(emissionsEmpty, () => ({
        ...initialEmissionsState,
    })),
    on(loadEmissionsFailed, (state, {error}) => ({
        ...state,
        emissions: errorState(error) as StateModel<EmissionModel[]>,
        selectedEmissionId: null,
    })),
    on(selectEmission, (state, {selectedEmissionId}) => ({
        ...state,
        selectedEmissionId,
    }))
);