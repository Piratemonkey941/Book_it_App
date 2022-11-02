
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor( private authService: AuthService){}
  // pageDisplayed: string = 'bookshelf';
  title = 'book-it';

  ngOnInit() {
    this.authService.automaticSignIn()
  }
}

















// ngModel is two way binding
// onNavigatePage(page: string) {
//   this.pageDisplayed = page;
// }
// }
