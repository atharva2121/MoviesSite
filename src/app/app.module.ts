import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { RecentComponent } from './recent/recent.component';
import { PopularComponent } from './popular/popular.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrendingComponent,
    RecentComponent,
    PopularComponent,
    MovieDetailsComponent,
    SearchedMovieComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
