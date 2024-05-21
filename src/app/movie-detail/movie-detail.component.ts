import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']  // 'styleUrl' değil 'styleUrls'
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie | null = null;

  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieService.getMovie(+id)
        .subscribe(movie => {
          if (movie) {
            this.movie = movie;
          } else {
            console.error('Movie not found with id:', id);
            this.movie = null;
          }
        });
    } else {
      console.error('Invalid movie id:', id);
      this.movie = null;
    }
  }
}
