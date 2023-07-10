import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent {
  moviesData = this.moviesDataService.getMoviesData();
  recentMoviesdata = this.moviesDataService.getRecentMoviesData();
  currentPage = 1;
  totalPages = Math.ceil(this.recentMoviesdata.length / 5);
  constructor(private moviesDataService: MoviesDataService, private router: Router){
    
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
