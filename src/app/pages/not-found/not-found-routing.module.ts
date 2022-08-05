import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found.component';

const notFound:Route = {
  path: '',
  component: NotFoundComponent,
}

const routes: Routes = [
  notFound,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
