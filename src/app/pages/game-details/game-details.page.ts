import { GamesModel } from './../../models/games.model';
import { StateManagerService } from './../../services/state-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  data: GamesModel;
  constructor(private state: StateManagerService) { }

  ngOnInit() {
    this.data = (this.state.getData());
  }

}
