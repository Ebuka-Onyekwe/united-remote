import { StateManagerService } from './../../services/state-manager.service';
import { HttpGetService } from '../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesModel } from 'src/app/models/games.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  allGames: GamesModel[];
  searchQuery: string;
  gameList: GamesModel[] = [];

  constructor(private httpService: HttpGetService, private route: Router, private state: StateManagerService) {}

  ngOnInit() {
    this.httpService.getGames().subscribe((games: GamesModel[]) => {
      this.allGames = games;
      this.gameList = games;
    });
  }

  clear() {
      this.gameList = [...this.allGames];
}
  searchGames() {
      this.gameList = this.allGames.filter((game: GamesModel)  => {
       return game.name.includes(this.searchQuery);
      });
    }

  ionViewDidLeave() {
      this.gameList = [...this.allGames];
  }

  getGame(index: number) {
    this.state.setData(this.gameList[index]).then(() => {
      this.route.navigateByUrl('game-details');
    });
  }

}
