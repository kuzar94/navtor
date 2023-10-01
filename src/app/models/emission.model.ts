import {StateModel} from './state.model';

export interface EmissionModel {
    id: number,
    timeSeries: TimeSeriesModel[],
}

export interface TimeSeriesModel {
    ch4_emissions:number,
    co2_emissions:number,
    nox_emissions:number,
    pm_emissions:number,
    report_from_utc: Date,
    report_to_utc: Date,
    sox_emissions: number
}

export interface EmissionsState {
    emissions: StateModel<EmissionModel[]>,
    selectedEmissionId: number | null
}

