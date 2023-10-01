import {createAction, props} from '@ngrx/store';
import {VesselModel} from '../../models/vessel.model';

export const loadVessels = createAction('[Vessels] Load Vessels', props<{ data?: VesselModel[] }>());
export const vesselsLoaded = createAction('[Vessels] Vessels Loaded', props<{ data: VesselModel[] }>());
export const vesselsEmpty = createAction('[Vessels] Vessels Empty');
export const loadVesselsFailed = createAction('[Vessels] Load Vessels Failed', props<{ error: any }>());
