import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'bookshelf';
  pageDisplay = "bookshelf"

  onNavigatePage(page: string) {

    this.pageDisplay = page
  }
}









// ngModel is two way binding
