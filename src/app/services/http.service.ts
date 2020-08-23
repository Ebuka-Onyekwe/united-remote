import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppValues } from '../values/constants';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {


  constructor(public http: HttpClient) { }

   getGames() {
    return  this.http.get(AppValues.GamesUrl);
  }

}
