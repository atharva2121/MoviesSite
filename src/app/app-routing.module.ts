import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { RecentComponent } from './recent/recent.component';
import { TrendingComponent } from './trending/trending.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "popular",
    component: PopularComponent
  },
  {
    path: "recent",
    component: RecentComponent
  },
  {
    path: "trending",
    component: TrendingComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'searched-item/:name',
    component: SearchedMovieComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
