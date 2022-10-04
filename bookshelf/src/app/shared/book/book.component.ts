import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from './book.model'



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  @Input()book: Book

  @Output()bookSelected = new EventEmitter<void>();
  // constructor(
  //   public title: string,
  //   public author: string,
  //   public genre: string,
  //   public coverImagePath: string

  //   )

  constructor() {

  }




    ngOnInit(): void {
    }

    onBookSelected() {
      this.bookSelected.emit();
    }

  }
  // export
//
