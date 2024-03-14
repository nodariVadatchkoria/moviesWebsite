import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {TvService} from '../../services/tv.service';

@Component({
  selector: 'app-tv-show',
  standalone: true,
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
  imports: [
    NgIf
  ]
})
export class TvShowComponent implements OnInit{
  content = 'TV Show';

  constructor(
    private tvService: TvService
  ) {}

  ngOnInit(): void {
    this.discoverTvShows();
    }

  discoverTvShows() {
    this.tvService.discoverTvShows()
      .subscribe((res) => {
        console.log(res);
      });
  }

}
