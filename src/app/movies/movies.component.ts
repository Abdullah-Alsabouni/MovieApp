import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';


@Component({
  selector: 'movies', // ==> <movies></movies> , '.movies'==> <div class = "movies">
  templateUrl: 'movies.component.html'
})
export class MoviesComponent {
  title = 'Movie List';
  movies = Movies; // movies movie.datasource.ts'ten gelen Movie dizisine eşit
}
