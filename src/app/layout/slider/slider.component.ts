import {Component,  Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../pages/home/home.component";
import {Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HomeComponent, ImagePipe, ButtonComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  imagePipe: ImagePipe =  new ImagePipe();

  _Movies: Movie.Popular = {} as Movie.Popular;
  @Input({required: true})
  set popularMovies(movie: Movie.Popular | null) {
    if(!movie) {
      return;
    }
    this._Movies = {
      ...movie,
      backdrop_path: this.imagePipe.transform(movie.backdrop_path, 'original')
    }
  }

  get movie(): Movie.Popular | null{
    return this._Movies;
  }
  @Input() carousel?: TemplateRef<any>;


}
