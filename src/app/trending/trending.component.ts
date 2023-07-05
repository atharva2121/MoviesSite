import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  moviesData = this.moviesDataService.getMoviesData();
  trendingMoviesData: Array<{
    name: string;
    releaseDate: string;
    cast: string[];
    description: string;
    type: string;
    genre: string;
    duration: string;
    rating: number;
    poster: string;
  }> = []; 
  constructor(private moviesDataService: MoviesDataService){
    for (let i = 0; i < this.moviesData.length; i++) {
      const movie = this.moviesData[i];
      if(movie.type === "Trending"){
        this.trendingMoviesData.push(movie);
      }
    }
  }
}
