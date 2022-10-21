import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { interval } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService} from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book: Book = new Book('','','','')
  idx:number;

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.book = this.bookshelfService.getBook(this.idx);
    });
  }

  onEditBook() {
    this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
  }

  onRemoveBook() {
    this.bookshelfService.removeBook(this.idx)
  }
}


