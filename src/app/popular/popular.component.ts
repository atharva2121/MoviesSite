import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  moviesData = this.moviesDataService.getMoviesData();
  popularMoviesData = this.moviesDataService.getPopularMoviesData();
  constructor(private moviesDataService: MoviesDataService, private router: Router){
    
  }
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }
}
