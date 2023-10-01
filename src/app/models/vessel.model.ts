import {StateModel} from './state.model';

export interface VesselModel {
    active: boolean,
    companyId: number,
    companyName: string,
    id: number,
    imo: number,
    mmsi: number,
    name: string,
    startDate: Date,
    vesselType: string
}

export interface VesselsState extends StateModel<VesselModel[]> {}

