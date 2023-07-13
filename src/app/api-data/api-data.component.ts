import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit{
  moviesData : any = [];
  currentPage = 1;
  totalPages = 1;
  paramMapSubscription: Subscription | undefined;
  constructor(private moviesDataService: MoviesDataService, private router: Router, private route:ActivatedRoute){
    

  }
  ngOnInit(): void {
    this.paramMapSubscription = this.route.paramMap.subscribe(params =>{
      const key = params.get('key');
      this.moviesDataService.makeRequest(key).subscribe(
        (result: any) => {
          this.moviesData = result.d;
          console.log(this.moviesData);
        },
        (error) => {
          console.error(error);
        }
      );
    })

    
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
