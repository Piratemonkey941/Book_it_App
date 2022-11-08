import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './shared/auth/authinterceptorservice.service';


import { SharedModule } from './shared/shared.module';
import { LibraryModule } from './library/library.module';
import { BookshelfModule } from './bookshelf/bookshelf.module';
// import { AuthModule } from './shared/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { BookshelfComponent } from './bookshelf/bookshelf.component';
// import { LibraryComponent } from './library/library.component';
// import { BookListComponent } from './bookshelf/book-list/book-list.component';
// import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
// import { BookResultsComponent } from './library/book-results/book-results.component';
// import { BookSearchComponent } from './library/book-search/book-search.component';
// // import { HeaderComponent } from './header/header.component';
// import { BookComponent } from './shared/book/book.component';
// import { DropdownDirective } from './shared/directives/dropdown.directive';
// import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
// import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
// import { NotificationComponent } from './shared/notification/notification.component';
// import { BookFormTdComponent } from './bookshelf/book-form-td/book-form-td.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BookFormReactiveComponent } from './bookshelf/book-form-reactive/book-form-reactive.component';
// import { AuthComponent } from './shared/auth/auth.component'
// import { AlertComponent } from './shared/alert/alert.component';
// import { NavigationComponent } from './shared/navigation/navigation.component';





@NgModule({
  declarations: [
    AppComponent,
    // BookshelfComponent,
    // LibraryComponent,
    // BookListComponent,
    // BookDetailsComponent,
    // BookResultsComponent,
    // BookSearchComponent,
    // BookComponent,
    // // HeaderComponent,
    // DropdownDirective,
    // BookshelfHomeComponent,
    // BookshelfEditorComponent,
    // NotificationComponent,
    // BookFormTdComponent,
    // BookFormReactiveComponent,
    // AuthComponent,
    // AlertComponent,
    // NavigationComponent,






  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    SharedModule,
    LibraryModule,
    BookshelfModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





