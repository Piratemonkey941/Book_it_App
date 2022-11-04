import { Component, OnInit, Output, EventEmitter, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { Book } from '../shared/book/book.model';
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective) alertHost: any;
  private modalCloseSub: Subscription
  private selectedBookSub: Subscription
  selectedBook: Book

  constructor(
    private bookshelfService: BookshelfService,
    private cmpFacResolver: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {
    this.selectedBookSub = this.bookshelfService.bookSelected.subscribe(
      book => {
        const alertMsg = `Successfully removed ${book.title} from your personal library.`;
      this.removeBookAlert(alertMsg)
    })
    };

  ngOnDestroy(): void {
    this.selectedBookSub.unsubscribe()
  }

  removeBookAlert(msg: string) {

    const alertCmpFactory = this.cmpFacResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear()

    const componentRef = hostViewContainerRef.createComponant(alertCmpFactory);
    componentRef.instance.alertMsg = msg;

    const clearAlert = () => {
      this.modalCloseSub.unsubscribe();
      hostViewContainerRef.clear();
    }

    this.modalCloseSub = componentRef.instance.closeModal.
      subscribe(clearAlert);

    setTimeout(() => {
      if(this.modalCloseSub) clearAlert();
    }, 3000)

  }

}

//

  // selectedBook: Book = new Book ( '','','','');

  // // Subscribe to the bookshelfService to get all the global updates inside this component
  // this.bookshelfService.bookSelected.subscribe((book: Book) => this.selectedBook = book)


//   myBooks: BookComponent[] = [
//     new BookComponent(
//   )
// ];

// @Output() currentSelectedBook = new EventEmitter<BookComponent>();

  // handleBookSelected(book: BookComponent){
  //   this.currentSelectedBook.emit(book)
  // }



// 'Book of Testing',
// 'Will Wilder',
// 'Mystery',
// 'https://source.unsplash.com/50x50/?mystery,book'
