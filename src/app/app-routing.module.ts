import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'vessels', loadChildren: () => import('./pages/vessels/vessels.module').then(m => m.VesselsModule)},
  {path: 'emissions', loadChildren: () => import('./pages/emissions/emissions.module').then(m => m.EmissionsModule)},
  {path: '**', redirectTo: 'vessels'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
