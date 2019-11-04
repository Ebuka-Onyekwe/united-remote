import { HttpGetService } from '../../services/http-get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
data:any = {}
  constructor(public service: HttpGetService) { }

  ngOnInit() {
   this.data = (this.service.getData())
  }

}
