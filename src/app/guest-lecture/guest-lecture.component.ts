import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-guest-lecture',
  templateUrl: './guest-lecture.component.html',
  styleUrls: ['./guest-lecture.component.css']
})
export class GuestLectureComponent implements OnInit {

  showWebCam: boolean = false;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
    if(id === "custom-modal-1"){
      this.showWebCam = true;
    }
   
}

closeModal(id: string) {
    this.modalService.close(id);
    if(id === "custom-modal-1"){
      this.showWebCam = false;
    }
   
}
}
