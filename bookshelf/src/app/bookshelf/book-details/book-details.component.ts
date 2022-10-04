import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book = new Book('', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
