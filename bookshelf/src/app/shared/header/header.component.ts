
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;

  @Output() currentPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    this.currentPage.emit(page)
  }

}

