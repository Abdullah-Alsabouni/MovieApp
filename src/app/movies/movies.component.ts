import { Component } from "@angular/core";

@Component({
    selector: 'movies', // ==> <movies></movies> , '.movies'==> <div class = "movies">
    templateUrl: 'movies.component.html',
    styles: [`
        h2 {
            color: blue;
        }
        // h4 {
        //     color: yellow;  // movies comp. içinde olan movie comp. h4 ile tanımlanan etiketler movies.component.style'den ayarlanamaz
        // }
        `]
})
export class MoviesComponent {

}