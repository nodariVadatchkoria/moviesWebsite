import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./pages/people/people.component";
import {PeopleDetailComponent} from "./pages/people/people.detail/people.detail.component";

const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: '',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),

  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.component').then(m => m.SearchComponent),
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./pages/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path:'**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
