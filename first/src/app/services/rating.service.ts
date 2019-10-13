import { Injectable } from '@angular/core';
import {Rate} from 'src/app/core/Rate';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'http://localhost:3000';
  avg = 4;
  constructor(private http:HttpClient) { }

  postRating(data:Rate){
    
    return this.http.put(this.baseUrl ,data);
  }

  getRates(){
    return this.http.get(this.baseUrl);
  }

  send(id:String,rate:Rate){
    return this.http.put(this.baseUrl +'/'+ id+'/rates',rate);
  }
  
}
