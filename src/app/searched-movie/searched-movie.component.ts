import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.css']
})
export class SearchedMovieComponent {
  moviesData = this.moviesDataService.getMoviesData();
  moviesToBeDisplayed: any = [];
  paramMapSubscription: Subscription | undefined;
  constructor(private moviesDataService: MoviesDataService, private router:Router, private route:ActivatedRoute){

  }
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }

  
  ngOnInit(): void {
    this.paramMapSubscription = this.route.paramMap.subscribe(params =>{
      const searchedItem = params.get('name');
      console.log(searchedItem);
      if(searchedItem !== null){
        for(let i= 0; i< this.moviesData.length; i++){
          if(this.moviesData[i].name.toLowerCase().includes(searchedItem.toLowerCase())){
            this.moviesToBeDisplayed.push(this.moviesData[i]);
          }
        }
      }
      
      
    })
  }

  ngOnDestroy(): void {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }

}
