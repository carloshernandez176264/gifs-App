import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsCardComponent } from "../gifs-card/gifs-card.component";

@Component({
    selector: 'gifs-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    imports: [GifsCardComponent]
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];


}
