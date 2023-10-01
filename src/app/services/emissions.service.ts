import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {EmissionModel} from '../models/emission.model';
import {Store} from '@ngrx/store';
import {
    emissionsEmpty,
    emissionsLoaded,
    loadEmissions,
    loadEmissionsFailed,
    selectEmission
} from '../store/emission-store/emissions.actions';

@Injectable({
    providedIn: 'root',
})
export class EmissionsService {
    constructor(private http: HttpClient,
                private emissionStateStore: Store<EmissionModel[]>) {
    }

    getEmissions(): Observable<EmissionModel[]> {
        this.emissionStateStore.dispatch(loadEmissions({data: undefined}));
        return this.http.get<EmissionModel[]>(`https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json`).pipe(tap({
            next: (data: EmissionModel[]) => {
                if (data.length) {
                    this.emissionStateStore.dispatch(emissionsLoaded({data}));
                    this.emissionStateStore.dispatch(selectEmission({selectedEmissionId: data[0].id}));
                } else {
                    this.emissionStateStore.dispatch(emissionsEmpty())
                }
            },
            error: (error) => {
                this.emissionStateStore.dispatch(loadEmissionsFailed({error}))
            }
        }))
    }
}
