import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed = true;
  searchTerm ?: string;
  
  constructor(private router: Router){}
  

  search(): void {
    console.log('Searching for:', this.searchTerm);
    this.router.navigate(['/searched-item', this.searchTerm]);
  }
}
