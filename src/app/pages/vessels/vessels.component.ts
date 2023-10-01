import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ColDef} from 'ag-grid-community';
import {Observable} from 'rxjs';
import {VesselModel} from '../../models/vessel.model';
import {Store} from '@ngrx/store';
import {StateModel} from '../../models/state.model';
import {ThemeService} from '../../services/theme.service';

@Component({
    selector: 'app-vessels',
    templateUrl: './vessels.component.html',
    styleUrls: ['./vessels.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VesselsComponent {
    public columnDefs: ColDef[] = [
        {field: 'name', flex: 2},
        {field: 'mmsi', flex: 2},
        {field: 'imo', flex: 2},
        {field: 'companyName', flex: 2},
        {field: 'vesselType', flex: 1},
    ];

    data$: Observable<StateModel<VesselModel[]>>;

    constructor(private store: Store<{ vessels: StateModel<VesselModel[]> }>,
                public themeService: ThemeService) {
        this.data$ = this.store.select('vessels');
    }
}
