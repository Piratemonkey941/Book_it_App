//NAVIGATION FILE
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  show: boolean = false;



  constructor(
    private httpService: HttpService

  ) {}

  ngOnInit(): void {}

 onSaveData(){
  this.httpService.saveBooksToFirebase()
 }
 onFetchData(){
  this.httpService.fetchBooksFromFirebase()
 }

}


// @Output() currentPage = new EventEmitter<string>();
// onSelectPage(page: string) {
//   this.currentPage.emit(page)
// }
