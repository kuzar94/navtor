import {createAction, props} from '@ngrx/store';
import {EmissionModel} from '../../models/emission.model';

export const loadEmissions = createAction('[Emissions] Load Emissions', props<{ data?: EmissionModel[] }>());
export const emissionsLoaded = createAction('[Emissions] Emissions Loaded', props<{ data: EmissionModel[] }>());
export const emissionsEmpty = createAction('[Emissions] Emissions Empty');
export const loadEmissionsFailed = createAction('[Emissions] Load Emissions Failed', props<{ error: any }>());
export const selectEmission = createAction('[Emissions] Select Emission', props<{ selectedEmissionId: number | null }>());

