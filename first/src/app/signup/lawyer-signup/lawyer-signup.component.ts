import { Component, OnInit } from '@angular/core';
import { Lawyer } from 'src/app/core/lawyer';

@Component({
  selector: 'app-lawyer-signup',
  templateUrl: './lawyer-signup.component.html',
  styleUrls: ['./lawyer-signup.component.css']
})
export class LawyerSignupComponent implements OnInit {

  lawyerModel = new Lawyer('', null,'','','','','','','',null,'');
  constructor() { }

  ngOnInit() {
  }

}
