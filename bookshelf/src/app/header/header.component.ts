
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  @Output() displayPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  showBookshelf() {
    this.displayPage.emit('bookshelf');
    console.log('Bookshelf');
  }

  showLibrary() {
    this.displayPage.emit('library');
    console.log('Library');
  }
}
