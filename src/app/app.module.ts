import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListService } from './services/posts-list.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
