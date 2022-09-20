import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { FormComponent } from './user/components/form/form.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    BookListComponent,
    BookItemComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
