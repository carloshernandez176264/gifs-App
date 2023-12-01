import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
[x: string]: any;

tags: [] = [];

  constructor(
    private gifsService : GifsService,
  ) { }

  get tagsHistory(){
    return this.gifsService.tagsHistory;
  }

}
