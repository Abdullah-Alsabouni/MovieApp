import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) {} // logging servisini MovieService'e dahil etmek

  getMovies(): Observable<Movie[]> { // Observable : bilgiyi asenkron bir şekilde almamızı sağlar 
    this.loggingService.add('MovieService: listing movies');
    return of(Movies);
  }
}
