import {createReducer, on} from '@ngrx/store';
import {loadVessels, loadVesselsFailed, vesselsEmpty, vesselsLoaded} from './vessels.actions';
import {emptyState, errorState, loadedState, loadingState} from '../../models/state.model';
import {initialVesselsState} from './vessels.state';

export const vesselsReducer = createReducer(
    initialVesselsState,
    on(loadVessels, (state, {data}) => loadingState(data)),
    on(vesselsLoaded, (state, {data}) => loadedState(data)),
    on(vesselsEmpty, () => emptyState()),
    on(loadVesselsFailed, (state, {error}) => errorState(error)),
);