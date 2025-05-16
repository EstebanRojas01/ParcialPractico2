import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';


const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'anime', loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) },
  {path: 'id', component: AnimeDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
