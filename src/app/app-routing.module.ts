import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./pages/people/people.component";
import {PeopleDetailComponent} from "./pages/people/people.detail/people.detail.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
