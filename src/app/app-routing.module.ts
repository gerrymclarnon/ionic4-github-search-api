import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-search-page', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'user-search-page', loadChildren: './pages/user-search-page/user-search-page.module#UserSearchPagePageModule' },
  { path: 'user-search-results/:id', loadChildren: './pages/user-search-results/user-search-results.module#UserSearchResultsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
