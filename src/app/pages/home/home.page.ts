import { HttpGetService } from '../../services/http-get.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  isSearching: any;
  Settings: any;
  postlist: any[];
  untouchedArray: any;
  searchQuery: any;
  tepArray: any[];

  constructor(public httpService: HttpGetService, public route: Router) {}

  ngOnInit() {
    this.httpService.get("./assets/front-end-test/data.json").subscribe((response:any)=>{
     this.postlist = response
    })
  }

  clear(){
    if (this.isSearching) {
        this.postlist = [];
        this.postlist =  [...this.untouchedArray];
        this.isSearching = false
  }
}
    filter(){
      this.isSearching = true;
        this.tepArray = [];
        let j = this.untouchedArray.length;
      for(let i = 0; i < j; i ++) {
        if(this.untouchedArray[i].name.includes(this.searchQuery) || this.untouchedArray[i].name.toLowerCase().includes(this.searchQuery) 
          ){
             this.tepArray.push(this.untouchedArray[i]) 
           }
      };
      if (this.tepArray.length !== 0) {
        this.postlist = []
        this.postlist = [...this.tepArray];
      
      }
    }
  
    getReady(){
      if(!this.isSearching){
            this.untouchedArray = [];
              this.untouchedArray =  [...this.postlist];
      }
      
    }
  ionViewDidLeave(){
            if(this.isSearching){
              this.postlist = [];
              this.postlist =   [...this.untouchedArray];
              this.tepArray = [];
              this.untouchedArray = [];
              this.isSearching = false
                }
  }
  getGame(index){
    this.httpService.setData(this.postlist[index]).then(()=>{
      this.route.navigateByUrl('game-details')
    })
  }

}