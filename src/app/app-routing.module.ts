import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexCinemaComponent } from './cinemas/index-cinema/index-cinema.component';
import { CreateCinemaComponent } from './cinemas/create-cinema/create-cinema.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditCinemaComponent } from './cinemas/edit-cinema/edit-cinema.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'generos', component: GenreListComponent },
  { path: 'generos/crear', component: CreateGenreComponent },
  { path: 'generos/editar/:id', component: EditGenreComponent },
  { path: 'actores', component: IndexActorComponent },
  { path: 'actores/crear', component: CreateActorComponent },
  { path: 'actores/editar/:id', component: EditActorComponent },
  { path: 'cines', component: IndexCinemaComponent },
  { path: 'cines/crear', component: CreateCinemaComponent },
  { path: 'cines/editar/:id', component: EditCinemaComponent },
  { path: 'peliculas/crear', component: CreateMovieComponent },
  { path: 'peliculas/editar/:id', component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
