
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageDisplayed: string = 'bookshelf';
  title = 'book-it';

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }
}

















// ngModel is two way binding
