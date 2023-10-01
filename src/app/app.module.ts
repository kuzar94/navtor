import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {PrimeNGConfig} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {vesselsReducer} from './store/vessels-store/vessels.reducer';
import {emissionsReducer} from './store/emission-store/emissions.reducer';
import {DropdownModule} from 'primeng/dropdown';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
    primeConfig.ripple = true;
};

const primeNgModules = [CardModule];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('vessels', vesselsReducer),
        StoreModule.forFeature('emissions', emissionsReducer),
        ...primeNgModules,
        ButtonModule,
        DropdownModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAppFactory,
            deps: [PrimeNGConfig],
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
