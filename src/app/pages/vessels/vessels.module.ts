import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VesselsComponent} from './vessels.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {AgGridModule} from 'ag-grid-angular';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ViewErrorComponent} from '../../shared-components/view-error/view-error.component';
import {ViewEmptyComponent} from '../../shared-components/view-empty/view-empty.component';

const routes: Routes = [
    {
        path: '',
        component: VesselsComponent,
    },
];

@NgModule({
    declarations: [VesselsComponent],
    imports: [
        RouterModule.forChild(routes),
        CardModule,
        CommonModule,
        DividerModule,
        AgGridModule,
        ProgressSpinnerModule,
        ViewErrorComponent,
        ViewEmptyComponent
    ],
    exports: [RouterModule],
})

export class VesselsModule {
}