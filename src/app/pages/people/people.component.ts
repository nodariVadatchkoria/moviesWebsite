import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../services/tmdb.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
constructor(private tmdbservice: TmdbService) { }

  people: any[] = [];
  searchStr: string = '';
  searchRes: any[] = [];
  getPeople() {
    this.tmdbservice. getPopularPeople().subscribe((data: any) => {
      console.log(data);
      this.people = data.results;
    });
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
