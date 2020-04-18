import { Component } from '@angular/core';
import { MarketsService } from './Services/markets.service';
import { Market } from './Models/market';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  markets: Market[];
  
  constructor(
    private marketServ: MarketsService,
  ) {}

  listMarketsByZip() {
    this.marketServ.listMarketsByZip("34772").subscribe(list => {
      this.markets = list.response;
      console.log("List of Markets", this.markets);
    });
  }

  listMarketsByLocation() {
    this.marketServ.listMarketsByLocation("28.288366", "-81.412045").subscribe(list => {
      this.markets = list.response;
      console.log("list of markets", this.markets);
    })
  }

  getMarketsDetail() {
    this.marketServ.getMarketDetailsById("1010766").subscribe(details => {
      console.log("Market Details", details);
    })
  }

  flipFavoriteValue() {
    this.marketServ.flipFavoriteStatusById("1010766").subscribe(fav => {
      console.log("favorite status", fav);
    })
  }
}
