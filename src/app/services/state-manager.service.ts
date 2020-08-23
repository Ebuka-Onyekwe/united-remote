import { GamesModel } from './../models/games.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  data: GamesModel;
  constructor() { }

   async setData(data: GamesModel) {
    await (this.data = data);
  }

  getData() {
    return this.data;
  }
}
