import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-register-lecture',
  templateUrl: './register-lecture.component.html',
  styleUrls: ['./register-lecture.component.css']
})
export class RegisterLectureComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
