import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {

  hide=true;
  constructor() {
   }

  ngOnInit() {
  }

  showHide(el){
    this.hide = false; 
  }

}
