import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { BookshelfService} from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book = new Book('','','','') ;
  idx:number = 0

  constructor(
    private route: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = Number(params['id']);
      this.book = this.bookshelfService.getBook(this.idx);
    })

  }

  onEditBook() {
    this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
  }

  onRemoveBook() {
    this.bookshelfService.removeBook(this.idx)
  }
}


