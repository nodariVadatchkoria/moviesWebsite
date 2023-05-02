import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../services/tmdb.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
constructor(private tmdbservice: TmdbService) { }

  popularPeople: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalItems?: number;
  totalPages?: any;
  displayedPeople?: any[] ;

  getPeople() {
    this.tmdbservice. getPopularPeople().subscribe((data: any) => {

      this.popularPeople = data
      console.log(data);
    },
    (error) => {
      console.error(error); // Optional: Handle any errors that occurred during the API request
    }
    );
  }

  getPaginationData(): void {
    this.totalItems = this.popularPeople.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.updateDisplayedPeople();
  }

  updateDisplayedPeople(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedPeople = this.popularPeople.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updateDisplayedPeople();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }


  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  ngOnInit(){
    // this.getPeople()
this.tmdbservice.getPopularPeople().subscribe((data: any) => {
  this.popularPeople = data;
  this.getPaginationData();
  },
(error) => {
      console.error(error); // Optional: Handle any errors that occurred during the API request
    }
  )
}
}
