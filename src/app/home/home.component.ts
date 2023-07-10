import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesData = this.moviesDataService.getMoviesData();
  currentPage = 1;
  totalPages = Math.ceil(this.moviesData.length / 5);
  constructor(private moviesDataService: MoviesDataService, private router:Router){

  }
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }

  nextPage() {
   if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      
    }
  }

  
  
}
