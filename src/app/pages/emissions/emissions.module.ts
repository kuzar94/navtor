import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmissionsComponent} from './emissions.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ChartModule} from 'angular-highcharts';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ViewEmptyComponent} from '../../shared-components/view-empty/view-empty.component';
import {ViewErrorComponent} from '../../shared-components/view-error/view-error.component';
import {CommonModule} from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EmissionsComponent,
  },
];

@NgModule({
  declarations: [EmissionsComponent],
  imports: [RouterModule.forChild(routes), FormsModule, CardModule, DividerModule, ChartModule, ProgressSpinnerModule, ViewEmptyComponent, ViewErrorComponent, CommonModule, DropdownModule],
  exports: [RouterModule],
})

export class EmissionsModule {
}

