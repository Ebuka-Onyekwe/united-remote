import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  constructor(public http : HttpClient) { }

  get(url){
    console.log("Got here")
    return  this.http.get(url);
  }
}
