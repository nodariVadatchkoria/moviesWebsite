import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiKeyInterceptor} from "./interceptor/apiKey.interceptor";
import {FormsModule} from "@angular/forms";
import { MovieImagesComponent } from './pages/movie-images/movie-images.component';
import { TopRatedMoviesComponent } from './pages/top-rated-movies/top-rated-movies.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PeopleComponent } from './pages/people/people.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MovieImagesComponent,
    TopRatedMoviesComponent,
    AllMoviesComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    }

  ],
  exports: [
    TopRatedMoviesComponent,
    MovieImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
