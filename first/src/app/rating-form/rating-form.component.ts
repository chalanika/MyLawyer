import { Component, OnInit ,TemplateRef} from '@angular/core';
import {Rate} from 'src/app/core/Rate';
import { RatingService } from '../services/rating.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
 
})
export class RatingFormComponent implements OnInit {
  modalRef: BsModalRef;
  rateModel = new Rate(0,"");
  average:number;
  rates: any;
  Id = "5d85d7551cb544095c1b4011";
 
  constructor(private modalService: BsModalService,private _ratingService:RatingService) { }

  ngOnInit() {
  }
  onSave(){
    //console.log(this.rateModel.feedback);
    this._ratingService.send(this.Id,this.rateModel).subscribe(
      data=>console.log(data),
      error => console.log(error)
    );
  }

  get(){
    this._ratingService.getRates().subscribe(
      res=>{
        this.rates = res;
       console.log(this.rates)} ,
       error => console.log(error)
   );
  }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
