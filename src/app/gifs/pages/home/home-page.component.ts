import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from "../../components/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';


@Component({
    selector: 'gifs-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    imports: [SearchBoxComponent, CardListComponent]
})
export class HomePageComponent {

  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

  

}
