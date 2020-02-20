import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit, AfterViewInit {

  hide = true;
  constructor() {
  }

  ngOnInit() {
  }

  showHide(el) {
    this.hide = false;
  }

  ngAfterViewInit(): void {
    $('.tree-toggle').click(function () {
      $(this).parent().children('ul.tree').toggle(200);
    });
    $(function () {
      $('.tree-toggle').parent().children('ul.tree').toggle(200);
    })
  }

}
