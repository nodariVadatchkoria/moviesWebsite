import {Component, ContentChild, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import {Movie} from "../../interfaces";
import {MovieCardsComponent} from "../movie-cards/movie-cards.component";
@Component({
  selector: 'app-listcard',
  standalone: true,
  imports: [CommonModule, MovieCardsComponent],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListCardComponent implements OnInit {
  @Input() movie: Movie.Movie[] = [];
  @Input() title: string = '';
  @ContentChild('headerBtn') headerBtn?: TemplateRef<any>;

  showall() {

  }

  ngOnInit(): void {
    register();
  }
}
