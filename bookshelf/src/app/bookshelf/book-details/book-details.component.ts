import { Component, OnInit, Input } from '@angular/core';
import { BookComponent } from'src/app/shared/book/book.component'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: BookComponent ;

  constructor() { }

  ngOnInit(): void {
  }

}
