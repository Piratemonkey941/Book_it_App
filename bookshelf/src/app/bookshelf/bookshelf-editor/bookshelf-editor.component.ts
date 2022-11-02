import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false
  bookDetails: Book = {
    title: "",
    author: "",
    genre: "",
    coverImagePath: ""
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = Number(params["id"]);
      this.isEditMode = params["id"] != null;

      if(this.isEditMode) {
        this.bookDetails = this.bookshelfService.getBook(this.idx)
      }
      // console.log("%c  isEditMode: ", "color: red;", this.isEditMode);
    });
  }

  onSubmit(formObj: NgForm){
    const{title, author, coverImagePath, genre} = formObj.value

    this.bookDetails = new Book(title, author, coverImagePath, genre)

    if(this.isEditMode) {
      this.bookshelfService.updateBook(this.idx, this.bookDetails)
      this.router.navigate(['bookshelf/'])
    } else {
      this.bookshelfService.saveBook(this.bookDetails)
    }

    this.onResetForm()
    // let newBook = new Book(title, author, coverImagePath, genre)
  }

  onResetForm() {
    this.router.navigate(["../"], {relativeTo: this.route})
  }

}
