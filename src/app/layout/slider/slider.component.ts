import {Component,  Input, TemplateRef} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from "../../pages/home/home.component";
import {Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HomeComponent, ImagePipe, ButtonComponent, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  imagePipe: ImagePipe =  new ImagePipe();

  _Movies: Movie.Popular | Movie.Movie  = {} as Movie.Popular;
  @Input({required: true})
  set popularMovies(movie: Movie.Popular | Movie.Movie | null | undefined) {
    if(!movie) return;
    this._Movies = {
      ...movie,
      backdrop_path: this.imagePipe.transform(movie.backdrop_path, 'original')
    }
  }

  get movie(): Movie.Popular | Movie.Movie{
    return this._Movies;
  }
  @Input() carousel?: TemplateRef<any>;


}
