import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopRatedMoviesComponent} from '../top-rated-movies.component';

@Component({
  selector: 'app-overviws',
  standalone: true,
  imports: [CommonModule , TopRatedMoviesComponent],
  templateUrl: './overviews.component.html',
  styleUrls: ['./overviews.component.scss']
})
export class OverviewsComponent {
  @Input() movies: any[] = [];

}
