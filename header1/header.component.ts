
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { HttpService } from '../shared/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  show: boolean = false;
  isLoginMode = true;
  isAuthenticated = false

@Output() displayPage = new EventEmitter<string>();

constructor(
  private httpService: HttpService,
  private authService: AuthService
  ) {}

ngOnInit(): void {
  this.authService.currentUser.subscribe((user) => {
    this.isAuthenticated = !!user
  })
}

showBookshelf(){
  this.displayPage.emit('bookshelf')
  console.log('Bookshelf')
}

showLibrary(){
  this.displayPage.emit('library')
  console.log('Library')
}

onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
}

onSaveData(){
  this.httpService.saveBooksToFirebase()
 }
 onFetchData(){
  this.httpService.fetchBooksFromFirebase()
 }


 ngOnDestroy(): void {
  this.authService.currentUser.unsubscribe()
 }

 onSignOut() {
  this.authService.signOut();
}

}


// @Output() currentPage = new EventEmitter<string>();
// onSelectPage(page: string) {
//   this.currentPage.emit(page)
// }
