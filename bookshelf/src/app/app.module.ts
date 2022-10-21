import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookComponent } from './shared/book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NotificationComponent } from './shared/notification/notification.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookshelfComponent,
    BookDetailsComponent,
    BookListComponent,
    LibraryComponent,
    BookSearchComponent,
    BookResultsComponent,
    BookComponent,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    DropdownDirective,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
