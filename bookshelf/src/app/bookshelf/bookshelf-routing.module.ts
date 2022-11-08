import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshelfComponent } from './bookshelf.component';
import { RouterModule } from '@angular/router';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf-editor/bookshelf-editor.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { Routes } from '@angular/router';
// import { BookshelfService } from './bookshelf.service';

const routes: Routes = [{
  path: "",
  component: BookshelfComponent,
  canActivate: [AuthGuard],
  children : [
    { path: "", component: BookshelfHomeComponent },
    { path: "new", component: BookshelfEditorComponent },
    { path: ":id", component: BookDetailsComponent,},
    { path: ":id/edit", component: BookshelfEditorComponent, }
  ]
 }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookshelfRoutingModule { }
