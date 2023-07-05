import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { RecentComponent } from './recent/recent.component';
import { TrendingComponent } from './trending/trending.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
