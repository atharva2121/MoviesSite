import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movies = this.moviesDataService.getMoviesData();
  private paramMapSubscription: Subscription | undefined;
  constructor(private moviesDataService: MoviesDataService, private route: ActivatedRoute){}
  movie: any;

  ngOnInit(): void {
    this.paramMapSubscription = this.route.paramMap.subscribe(params =>{
      const movieId = params.get('id');
      console.log(movieId);
      this.addMovie(movieId);
    })
  }

  ngOnDestroy(): void {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }

  addMovie(movieId: string|null){
    var id:number;
    if(movieId !== null){
      id = parseInt(movieId, 10);
      for(let i=0; i<this.movies.length; i++){
        if(this.movies[i].id == id){
          this.movie = this.movies[i];
          break
        }
      }
    } 
    
   
  }
}
