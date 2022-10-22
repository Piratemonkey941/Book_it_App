import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { ActivatedRoute, Router, Params, } from '@angular/router';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',

  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false
  bookDetails = {
    title: '',
    author: '',
    coverImagePath: '',
    genre: '',
  }

  constructor(
      private route: ActivatedRoute,
      private bookshelfService: BookshelfService,
      private router: Router,
      ) { }

      ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
          this.idx = +params['id'];
          this.isEditMode = params['id'] != null;
          console.log('%c  isEditMode: ', 'color: red;', this.isEditMode);

          if (this.isEditMode) {
            this.bookDetails = this.bookshelfService.getBook(this.idx);
          }
        });
      }

      onSubmitBook(bookFormObj) {
        // Extra the user inputs to declared variables
        const { title, author, coverImagePath, genre } = bookFormObj.value;

        let newBook = new Book(title, author, coverImagePath, genre);

        // If edit mode, update book
        if (this.isEditMode) {
          this.bookshelfService.updateBook(this.idx, newBook);
          this.router.navigate([`bookshelf/${this.idx}`])
        } else {
          // Otherwise, add book to bookshelf
          this.bookshelfService.addBook(newBook);
        }
      }
      onResetForm() {
        this.router.navigate(["../"], { relativeTo: this.route });
      }

}
