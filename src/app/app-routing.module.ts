import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {NotFoundGuard} from './common/guards/not-found.guard';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () =>
    import('./pages/home/home.module')
      .then(mod => mod.HomeModule),
}

const catchAll: Route = {
  path: '**',
  canActivate: [NotFoundGuard],
  loadChildren: () =>
    import('./pages/not-found/not-found.module')
      .then(mod => mod.NotFoundModule),
}

const routes: Routes = [
  home,
  catchAll,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
