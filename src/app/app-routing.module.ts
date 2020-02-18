import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { GuestLectureComponent } from './guest-lecture/guest-lecture.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notice-board', component: NoticeBoardComponent },
  { path: 'guest-lecture', component: GuestLectureComponent },
  { path: 'video-calling', component: VideoCallingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
