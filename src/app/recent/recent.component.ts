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
  constructor(private moviesDataService: MoviesDataService, private router: Router){
    
  }
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }
}
