import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  movies: Movie[] | null = null;
  movieLength: number = 0;
  
  constructor(private movieService: MovieService) {}

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies.slice(0, 5);
      this.movieLength = movies.length;
    });
  }
  ngOnInit() {
    this.getMovies();
  }
}
