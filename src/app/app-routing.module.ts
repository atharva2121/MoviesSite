import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":type",
    component: CommonComponent
  },
  {
    path: ":type",
    component: CommonComponent
  },
  {
    path: ":type",
    component: CommonComponent
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
