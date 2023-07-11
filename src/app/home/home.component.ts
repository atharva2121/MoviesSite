import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesData = this.moviesDataService.getMoviesData();
  currentPage = 1;
  totalPages = Math.ceil(this.moviesData.length / 5);

  constructor(private moviesDataService: MoviesDataService, private router:Router){

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

 
  onFilterChange(filter: string): void {
    

    switch (filter) {
      case 'date':
        this.moviesData.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'duration':
        this.moviesData.sort((a, b) => {
          const durationA = this.convertDurationToMinutes(a.duration);
          const durationB = this.convertDurationToMinutes(b.duration);
          return durationB - durationA;
        });
        break;
      case 'rating':
        this.moviesData.sort((a, b) => b.rating - a.rating);
        break;
      case 'none': 
        this.moviesData = this.moviesDataService.getMoviesData();
        break;
    }
  }
  convertDurationToMinutes(duration: string): number {
    const parts = duration.split(' ');
    let minutes = 0;
  
    for (const part of parts) {
      if (part.includes('h')) {
        const hours = parseInt(part.replace('h', ''), 10);
        minutes += hours * 60;
      } else if (part.includes('m')) {
        const mins = parseInt(part.replace('m', ''), 10);
        minutes += mins;
      }
    }
  
    return minutes;
  }
}
