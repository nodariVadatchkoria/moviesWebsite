import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./people.component";
import {PeopleDetailComponent} from "./people.detail/people.detail.component";

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./people.module').then(m => m.PeopleModule) },

  {
    path: 'person',
    component: PeopleComponent,
    children: [
      {
        path: 'person/:id',
        component: PeopleDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
