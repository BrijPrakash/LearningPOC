import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { GuestLectureComponent } from './guest-lecture/guest-lecture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticeBoardComponent,
    GuestLectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
