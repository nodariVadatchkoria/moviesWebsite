import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./pages/people/people.component";
import {PeopleDetailComponent} from "./pages/people/people.detail/people.detail.component";
import {HeaderComponent} from "./layout/header/header.component";
import {LayoutComponent} from "./layout/layout/layout.component";

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:[

      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'people',
        loadComponent: () => import('./pages/people/people.component').then(m => m.PeopleComponent),

      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent),
      },
      {
        path: 'movie/:id',
        loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent),
      },
      {
        path: 'tv',
        loadComponent: () => import('./pages/tv-show/tv-show.component').then(m => m.TvShowComponent),
      }
    ]
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
