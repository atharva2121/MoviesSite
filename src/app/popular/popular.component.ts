import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  moviesData = this.moviesDataService.getMoviesData();
  popularMoviesData = this.moviesDataService.getPopularMoviesData();
  constructor(private moviesDataService: MoviesDataService){
    
  }
}
