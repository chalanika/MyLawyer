import { Component, TemplateRef ,OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RatingService } from '../services/rating.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit  {
  modalRef: BsModalRef;
  public rate = [];
  constructor(private modalService: BsModalService , private _ratingService:RatingService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  confirm() {
    this.modalRef.hide();
  }
  ngOnInit() {
    //this.rate = this._ratingService.getrating();
    console.log(this.rate);
  }

}
