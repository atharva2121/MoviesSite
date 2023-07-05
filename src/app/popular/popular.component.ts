import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  moviesData = this.moviesDataService.getMoviesData();
  popularMoviesData: Array<{
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
      if(movie.type === "Popular"){
        this.popularMoviesData.push(movie);
      }
    }
  }
}
