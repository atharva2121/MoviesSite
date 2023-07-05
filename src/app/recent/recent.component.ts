import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent {
  moviesData = this.moviesDataService.getMoviesData();
  recentMoviesData: Array<{
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
      if(movie.type === "Recent"){
        this.recentMoviesData.push(movie);
      }
    }
  }
}
