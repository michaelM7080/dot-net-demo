import { Component, OnInit } from '@angular/core';
import { MarketsService } from './Services/markets.service';
import { Market } from './Models/market';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeolocationService } from './Services/geolocation.service';
import { MatDialog } from '@angular/material/dialog';
import { FriendlyMessageComponent } from './Modules/friendly-message/friendly-message.component';
import { AboutComponent } from './Modules/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markets: Market[];
  zipFormGroup: FormGroup;
  gettingList: boolean = false;
  gettingDetail: boolean = false;
  
  constructor(
    private marketServ: MarketsService,
    private formBuilder: FormBuilder,
    private geoServ: GeolocationService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.zipFormGroup = this.formBuilder.group( {
      zip: ['', [
        Validators.pattern('[0-9]*'),
        Validators.maxLength(5), 
        Validators.minLength(5),
      ]],
    });
  }

  openInfo() {
    this.dialog.open(AboutComponent, {
      width: "80%", 
      maxWidth: "500px",
      height: "auto", 
      maxHeight: "95vh"
    });
  }

  setGettingListValue() {
    this.gettingList = true;
    setTimeout(() => {
      this.gettingList = false;
    }, 3000);
  }

  setGettingDetailValue() {
    this.gettingDetail = true;
    setTimeout(() => {
      this.gettingDetail = false;
    }, 3000);
  }

  listMarketsByZip() {
    if(this.zipFormGroup.valid && this.zipFormGroup.value.zip && this.zipFormGroup.value.zip != "00000") {
      this.setGettingListValue();
      this.marketServ.listMarketsByZip(this.zipFormGroup.value.zip).subscribe(list => {
        this.gettingList = false;
        this.markets = list.response;
        console.log("List of Markets", this.markets);
      });
    }
  }

  listMarketsByLocation() {
    this.setGettingListValue();
    this.zipFormGroup.reset();
    this.geoServ.getPosition().then(location => {
      if(location && location.lon && location.lon) {
        //if location is found, get list of marekts.
        this.marketServ.listMarketsByLocation(location.lat.toString(), location.lon.toString()).subscribe(list => {
          this.gettingList = false;
          this.markets = list.response;
          console.log("list of markets", this.markets);
        });
      }
      else {
        //throw error
        this.gettingList = false;
        this.dialog.open(FriendlyMessageComponent, {
          width: "auto", 
          height: "auto", 
          data: {"title": "Permissions Error", 
                "message": "We were not able to find your location.", 
                "message2": "Ensure that locaions is allows for this site.", 
                "button": "OK"}
        });
      }
    });
  }

  getMarketsDetail(marketId: string) {
    this.setGettingDetailValue();
    this.marketServ.getMarketDetailsById(marketId).subscribe(details => {
      this.gettingDetail = false;
      console.log("Market Details", details);
    })
  }

  flipFavoriteValue(marketId: string) {
    this.marketServ.flipFavoriteStatusById(marketId).subscribe(fav => {
      console.log("favorite status", fav);
    })
  }
}
