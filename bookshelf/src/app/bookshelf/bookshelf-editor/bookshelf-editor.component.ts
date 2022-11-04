import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
// import { Book } from 'src/app/shared/book/book.model';
// import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number;
  isEditMode = false
  // bookDetails: Book = {
  //   title: "",
  //   author: "",
  //   genre: "",
  //   coverImagePath: ""
  // }

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    // private bookshelfService: BookshelfService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = Number(params["id"]);
      this.isEditMode = params["id"] != null;
    })
  }
      // if(this.isEditMode) {
      //   this.bookDetails = this.bookshelfService.getBook(this.idx)
      // }
      // console.log("%c  isEditMode: ", "color: red;", this.isEditMode);

}
  // onSubmit(formObj: NgForm){
  //   const{title, author, coverImagePath, genre} = formObj.value

  //   this.bookDetails = new Book(title, author, coverImagePath, genre)

  //   if(this.isEditMode) {
  //     this.bookshelfService.updateBook(this.idx, this.bookDetails)
  //     this.router.navigate(['bookshelf/'])
  //   } else {
  //     this.bookshelfService.saveBook(this.bookDetails)
  //   }

  //   this.onResetForm()
  //   // let newBook = new Book(title, author, coverImagePath, genre)
  // }

  // onResetForm() {
  //   this.router.navigate(["../"], {relativeTo: this.route})
  // }


  // <h2>Book Form </h2>
  // <form #bookFormRef="ngForm" (ngSubmit)="onSubmit(bookFormRef)">
  //   <!-- TITLE -->
  //   <div class="form-group">
  //     <label for="title">Title</label>
  //     <input type="text" class="form-control" id="title" name="title" ngModel />
  //   </div>

  //   <!-- AUTHOR -->
  //   <div class="form-group">
  //     <label for="author">Author</label>
  //     <input type="text" class="form-control" id="author" name="author" ngModel />
  //   </div>

  //   <!-- GENRE -->
  //   <div class="form-group">
  //     <label for="genre">Genre</label>
  //     <select name="genre" id="genre" class="form-control" ngModel>
  //       <option disabled selected value>Select a Genre</option>
  //       <option value="Mystery">Mystery</option>
  //       <option value="Science">Science</option>
  //       <option value="Non-Fiction">Non-Fiction</option>
  //       <option value="Fiction">Fiction</option>
  //     </select>
  //   </div>

  //   <!-- IMAGE INPUT -->
  //   <div class="form-group">
  //     <label for="coverImagePath">Image Path</label>
  //     <input
  //       type="text"
  //       class="form-control"
  //       id="coverImagePath"
  //       name="coverImagePath"
  //       ngModel
  //     />
  //   </div>

  //   <!-- IMAGE DISPLAY -->
  //   <div class="row my-2">
  //     <div class="col-xs-10 mx-auto">
  //       <img
  //         class="img-responsive"
  //         [src]="bookFormRef.value['coverImagePath']"
  //         [alt]="bookFormRef.value['title']"
  //       />
  //     </div>
  //   </div>

  //   <!-- BUTTONS -->
  //   <button
  //     type="submit"
  //     class="btn btn-primary mr-3"
  //     [disabled]="!bookFormRef.valid"
  //   >
  //     Save
  //   </button>
  //   <button type="button" class="btn btn-warning" (click)="onResetForm()">
  //     Cancel
  //   </button>
  // </form>

