
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPage: string = 'bookshelf';
  title = 'book-it';

  onDisplayPage(page: string) {
    // Build to conditional render bookshelf or library
    this.showPage = page;

    // console.log('I want to navigate to ' + page);
  }
}




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {


//   title = 'bookshelf';
//   pageDisplay = "bookshelf"

//   onNavigatePage(page: string) {

//     this.pageDisplay = page
//   }
// }









// ngModel is two way binding
