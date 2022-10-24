import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css']
})
export class BookFormTdComponent implements OnInit {
  formHasBeenSubmitted = false;

  bookDetails = {
    title:"",
    author:"",
    genre:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit( formObj: NgForm){
    this.formHasBeenSubmitted = true
    console.log('Submitted', formObj)
    console.log(formObj)

    this.bookDetails.title = formObj.value.title
    this.bookDetails.author = formObj.value.author
    this.bookDetails.genre = formObj.value.genre

    formObj.reset()

 

  }

}
