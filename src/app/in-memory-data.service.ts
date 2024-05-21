import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const movies = [ 
      {id: 1, name: "movie 1", description: "Film1",imageUrl: "1.jpg"},
      {id: 2, name: "movie 2", description: "Film2",imageUrl: "2.jpg"},
      {id: 3, name: "movie 3", description: "Film3",imageUrl: "3.jpg"},
      {id: 4, name: "movie 4", description: "Film4",imageUrl: "4.jpg"},
      {id: 5, name: "movie 5", description: "Film5",imageUrl: "5.jpg"},
      {id: 6, name: "movie 6", description: "Film6",imageUrl: "6.jpg"}
  ];
  return {movies}
  }
  constructor() { }
}
