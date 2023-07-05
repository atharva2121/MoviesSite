import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  moviesData = this.moviesDataService.getMoviesData();
  trendingMoviesData = this.moviesDataService.getTrendingMoviesData();
  constructor(private moviesDataService: MoviesDataService){
  }
}
