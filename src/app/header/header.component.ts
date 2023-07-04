import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed = true;
  searchTerm ?: string;
  onSelect(typeOfMovie: string){

  }
  

  search(): void {
    console.log('Searching for:', this.searchTerm);
  }
}
