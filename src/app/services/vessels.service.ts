import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {VesselModel} from '../models/vessel.model';
import {Store} from '@ngrx/store';
import {loadVessels, loadVesselsFailed, vesselsEmpty, vesselsLoaded} from '../store/vessels-store/vessels.actions';

@Injectable({
    providedIn: 'root',
})
export class VesselsService {
    constructor(private http: HttpClient,
                private vesselStateStore: Store<VesselModel[]>) {
    }

    getVessels(): Observable<VesselModel[]> {
        this.vesselStateStore.dispatch(loadVessels({data: undefined}));
        return this.http.get<VesselModel[]>(`https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json`).pipe(tap({
            next: (data: VesselModel[]) => {
                if (data.length) {
                    this.vesselStateStore.dispatch(vesselsLoaded({data}));
                } else {
                    this.vesselStateStore.dispatch(vesselsEmpty())
                }
            },
            error: (error) => {
                this.vesselStateStore.dispatch(loadVesselsFailed({error}))
            }
        }))
    }
}
