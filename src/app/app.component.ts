import {Component} from '@angular/core';
import {VesselsService} from './services/vessels.service';
import {EmissionsService} from './services/emissions.service';
import {combineLatest, take} from 'rxjs';
import {DropdownChangeEvent} from 'primeng/dropdown';
import * as Highcharts from 'highcharts';
import darkTheme from 'highcharts/themes/dark-blue';
import {ThemeService} from './services/theme.service';
darkTheme(Highcharts);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    themeOptions: string[] = ['Dark', 'Light'];

    constructor(private vesselsService: VesselsService,
                private themeService: ThemeService,
                private emissionsService: EmissionsService) {
        // init the data
        combineLatest([
            this.vesselsService.getVessels(),
            this.emissionsService.getEmissions()
        ]).pipe(take(1)).subscribe();
    }

    handleThemeChange($event: DropdownChangeEvent): void {
        const value = $event.value as 'Dark' | 'Light'
        this.themeService.setTheme(value);
    }
}
