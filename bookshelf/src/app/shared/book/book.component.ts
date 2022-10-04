import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = new Book('','','','')
  constructor() { }

  ngOnInit(): void {
  }

}


// import { Component, Input, OnInit,Output, EventEmitter} from '@angular/core';
// // import { Book } from './book.model'


// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css']
// })


//  export class BookComponent implements OnInit {

//   @Input() book: Book = new Book('','','','');

//   // @Output() bookSelected = new EventEmitter<void>();

//   // constructor (

//   //   public title: string,
//   //   public author: string,
//   //   public coverImagePath: string,
//   //   public genre: string){}

//   ngOnInit(): void {

//   }

//   onBookSelected() {
//     // Tell App that someone clicked on a book!
//     this.bookSelected.emit();
// }
// }

// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css']
// })

// export class BookComponent implements OnInit {

//   @Input()book: Book

//   @Output()bookSelected = new EventEmitter<void>();

//   constructor() {

//   }




//     ngOnInit(): void {
//     }

//     onBookSelected() {
//       this.bookSelected.emit();
//     }

//   }
  // export
// bookshelf\src\app\bookshelf\book-list\book-list.component
