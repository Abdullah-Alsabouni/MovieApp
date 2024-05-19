import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent {
  title = 'Movie List';
  movies: Movie[] | null = null; 
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService){} // MovieSerive'ten bir nesne Injectable et

  
  onSelect(movie: Movie): void { // Listede seçilen bir elemanı selectedMovie'ye atama işlemi
      this.selectedMovie = movie;  
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  } 

  ngOnInit(): void { // nesne üretildikten sonra çalışır
    this.getMovies();
  }
}
