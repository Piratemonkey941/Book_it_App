
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase()
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase();
  }

  onSignOut() {
    this.authService.signOut();
  }
}


// onSwitchAuthMode() {
//     this.isLoginMode = !this.isLoginMode;
// }

// showBookshelf(){
//   this.displayPage.emit('bookshelf')
//   console.log('Bookshelf')
// }

// showLibrary(){
//   this.displayPage.emit('library')
//   console.log('Library')
// }





// @Output() currentPage = new EventEmitter<string>();
// onSelectPage(page: string) {
//   this.currentPage.emit(page)
// }
