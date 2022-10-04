import { Component, OnInit, Import } from '@angular/core';
import { Book } from 'src/app/shared/book/book.component';
import { BookResultsComponent} from 'src/app/library/book-results/book-results.component'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    )
];
}
