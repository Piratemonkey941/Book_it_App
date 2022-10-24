import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {
  reactiveForm: FormGroup
  formHasBeenSubmitted = false;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
     title : new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl("mystery", Validators.required)
    })
  }

  onFormSubmit(){
    console.log("Submited!");
    console.log( this.reactiveForm);

    this.formHasBeenSubmitted = true;

    setTimeout(() => {
      this.reactiveForm.reset();
      this.formHasBeenSubmitted = false;
    }, 3000)
  }


}
