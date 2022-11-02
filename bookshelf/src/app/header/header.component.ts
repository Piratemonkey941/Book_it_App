
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../shared/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;
  @Output() displayPage = new EventEmitter<string>();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase().subscribe();
}
}

// showBookshelf(){
//   this.displayPage.emit('bookshelf')
//   console.log('Bookshelf')
// }

// showLibrary(){
//   this.displayPage.emit('library')
//   console.log('Library')
// }


// @Output() currentPage = new EventEmitter<string>();
// onSelectPage(page: string) {
//   this.currentPage.emit(page)
// }
