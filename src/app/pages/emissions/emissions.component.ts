import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {combineLatest, Observable, Subject, takeUntil} from 'rxjs';
import {EmissionModel, EmissionsState, TimeSeriesModel} from '../../models/emission.model';
import {Store} from '@ngrx/store';
import {Destroy$} from '../../utils/destroy';
import {DropdownChangeEvent} from 'primeng/dropdown';
import {StateModel} from '../../models/state.model';
import {VesselModel} from '../../models/vessel.model';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-blue';
import {selectEmission} from '../../store/emission-store/emissions.actions';
import {ThemeService} from '../../services/theme.service';

theme(Highcharts);

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmissionsComponent {
  data$: Observable<EmissionsState>;
  @Destroy$() public readonly destroy$ = new Subject();

  defaultChartOptions = {
    chart: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    credits: {
      enabled: false
    }
  }

  chart = new Chart({});
  selectedEmissionValue: EmissionModel | null = null

  constructor(
      private themeService: ThemeService,
      private cdr: ChangeDetectorRef,
      private storeVessels: Store<{ vessels: StateModel<VesselModel[]> }>,
      private storeEmissions: Store<{ emissions: EmissionsState }>) {
    this.data$ = this.storeEmissions.select('emissions');
    combineLatest(
        [
          this.storeEmissions.select('emissions'),
          this.storeVessels.select('vessels'),
          this.themeService.theme$
        ]).pipe(takeUntil(this.destroy$)).subscribe(
        ([emissionsState, vesselsState, theme]) => {
          console.log('x')
          this.selectedEmissionValue = this.getSelectedEmission(emissionsState) ?? null;
          const vesselName = this.getVesselName(emissionsState, vesselsState) ?? 'Error while fetching vessel name';
          this.generateChart(emissionsState, vesselName, theme);
        });

  }

  generateChart(emissionState: EmissionsState, vesselName: string, theme: 'Dark' | 'Light'): void {
    this.chart = new Chart({
      ...this.defaultChartOptions,
      chart: {
        backgroundColor: theme === 'Dark' ? '#040c17' : '#ececec',
      },
      title: {
        text: `${vesselName} Emisions`,
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 7 * 24 * 3600 * 1000 * 2,
        gridLineWidth: 1,
        labels: {
          align: 'center',
          y: 30
        },
        startOnTick: false,
        endOnTick: false,
      },
      series: [
        {
          name: 'CH4 Emissions',
          type: 'line',
          data: this.getData('ch4_emissions', emissionState),
        },
        {
          name: 'NOx Emissions',
          type: 'line',
          data: this.getData('nox_emissions', emissionState),
        },
        {
          name: 'SOx Emissions',
          type: 'line',
          data: this.getData('sox_emissions', emissionState),
        },
        {
          name: 'PM Emissions',
          type: 'line',
          data: this.getData('pm_emissions', emissionState),
        }
      ]
    });
    this.cdr.detectChanges();
  }


  handleVesselChange($event: DropdownChangeEvent): void {
    this.storeEmissions.dispatch(selectEmission({selectedEmissionId: $event.value.id}))
  }

  private getVesselName(emissionsState: EmissionsState, vesselsState: StateModel<VesselModel[]>): string | null {
    const vessels = vesselsState?.value;
    const selectedVessel = vessels?.find(vessel => {
      return vessel.id === emissionsState?.selectedEmissionId
    });
    return selectedVessel ? selectedVessel.name : null;
  }

  private getData(key: keyof TimeSeriesModel, emissionState: EmissionsState): any[] {
    if (!emissionState.emissions.value) {
      return [];
    }
    if (!this.selectedEmissionValue) {
      return [];
    }
    return this.selectedEmissionValue.timeSeries.map((dataPoint) => [
      new Date(dataPoint.report_from_utc).getTime(),
      dataPoint[key],
    ]);
  }


  private getSelectedEmission(emissionState: EmissionsState): EmissionModel | undefined {
    return emissionState.emissions.value?.find(emission => emission.id === emissionState.selectedEmissionId);
  }
}

