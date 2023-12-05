import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [],
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {




@Input()
public gif!: Gif;


ngOnInit(): void {
  if(!this.gif)  throw new Error('Method not implemented.');
}

}
