import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from '../bookshelf/bookshelf.service';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  alert!: string
  private selectedBookSub!: Subscription

  constructor(public bookshelfService: BookshelfService,) { }

  ngOnInit(): void {

    this.selectedBookSub = this.bookshelfService.bookSelected.subscribe(
      book => {
        this.alert = `Successfully added book: ${ book.title } by ${ book.author } to personal bookshelf`;
        setTimeout(this.handleCloseModal, 4000);
      }
    )
  }

  ngOnDestroy(): void {
    this.selectedBookSub.unsubscribe()
  }
  
 handleCloseModal(){
    this.alert = '';
  }



}
