import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'
import { ModalService } from '../services/modal-service';
@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit, AfterViewInit {
  
  details = [
    {
      "id": 1,
      "name": "class 1",
      "sections": [{
        "id": 1,
        "name": "class 1 A",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 2,
        "name": "class 1 B",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 3,
        "name": "class 1 c",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 4,
        "name": "class 1 D",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      }]
    },{
      "id": 2,
      "name": "class 2",
      "sections": [{
        "id": 1,
        "name": "class 2 A",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 2,
        "name": "class 2 B",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 3,
        "name": "class 2 c",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      },{
        "id": 4,
        "name": "class 2 D",
        "students": [{
          "id": 1,
          "name": "Kate"
        },{
          "id": 2,
          "name": "Anna"
        },{
          "id": 3,
          "name": "Tom"
        },{
          "id": 4,
          "name": "Jerry"
        }]
      }]
    }];
  tableData = [];
  hide = true;
  constructor(private modalService: ModalService) {
    this.tableData = this.details;
  }

  ngOnInit() {
  }

  showHide(el) {
    this.hide = false;
  }
  updateTable(item) {
    if(item == null) {
      this.tableData = this.details;
    } else {
      this.tableData = item;
    }
  }

  ngAfterViewInit(): void {
    $('.tree-toggle').click(function () {
      $(this).parent().children('ul.tree').toggle(200);
    });
    $(function () {
      $('.tree-toggle').parent().children('ul.tree').toggle(200);
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}
}
