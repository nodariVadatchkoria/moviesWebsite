import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {FormsModule} from "@angular/forms";
import { MovieImagesComponent } from './pages/movie-images/movie-images.component';
import { TopRatedMoviesComponent } from './pages/top-rated-movies/top-rated-movies.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieImagesComponent,
    TopRatedMoviesComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
