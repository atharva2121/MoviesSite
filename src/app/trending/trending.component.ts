import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  moviesData = this.moviesDataService.getMoviesData();
  trendingMoviesData = this.moviesDataService.getTrendingMoviesData();
  constructor(private moviesDataService: MoviesDataService, private router:Router){
  }
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }
}
