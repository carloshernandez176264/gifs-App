import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  gifs: Gif[] = [];


}
