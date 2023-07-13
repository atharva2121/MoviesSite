import { Component, OnChanges, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit{
  moviesData = this.moviesDataService.getMoviesData();
  paramMapSubscription ?: Subscription | undefined
  currentPage = 1;
  totalPages = 1;
  // moviesGotFromApi ?: any = [];
  constructor(private moviesDataService: MoviesDataService, private router: Router, private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.paramMapSubscription = this.route.paramMap.subscribe(params =>{
      const type = params.get('type');
      console.log(type);
      this.addMovies(type);
    })

    // this.moviesGotFromApi = this.moviesDataService.makeRequest();
    // console.log(this.moviesGotFromApi);
  }


  addMovies(type: string|null){
    this.moviesData = [];
    this.moviesData = this.moviesDataService.getTypeBasedData(type);
    this.totalPages = Math.ceil(this.moviesData.length / 5);
    this.currentPage = 1;
  }
  
  navigateToMovieDetails(movieId: number){
    this.router.navigate(['/movie-details', movieId]);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
       this.currentPage++;
     }
   }
 
   previousPage() {
     if (this.currentPage > 1) {
       this.currentPage--;
       
     }
   }
}
