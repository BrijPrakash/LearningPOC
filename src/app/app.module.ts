import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { GuestLectureComponent } from './guest-lecture/guest-lecture.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import {WebcamModule} from 'ngx-webcam';
import {ModalService} from './services/modal-service'
import { ModalComponent } from './directive/modal.component';
import { FormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticeBoardComponent,
    GuestLectureComponent,
    VideoCallingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    WebcamModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
