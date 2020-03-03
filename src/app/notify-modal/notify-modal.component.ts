import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-notify-modal',
  templateUrl: './notify-modal.component.html',
  styleUrls: ['./notify-modal.component.css']
})
export class NotifyModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
