import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesData = this.moviesDataService.getMoviesData();
  constructor(private moviesDataService: MoviesDataService){

  }
}
