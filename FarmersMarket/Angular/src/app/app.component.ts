import { Component, OnInit } from '@angular/core';
import { MarketsService } from './Services/markets.service';
import { Market } from './Models/market';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeolocationService } from './Services/geolocation.service';
import { MatDialog } from '@angular/material/dialog';
import { FriendlyMessageComponent } from './Components/friendly-message/friendly-message.component';
import { AboutComponent } from './Components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markets: Market[];
  zipFormGroup: FormGroup;
  
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

  listMarketsByZip() {
    if(this.zipFormGroup.valid && this.zipFormGroup.value.zip && this.zipFormGroup.value.zip != "00000") {
      this.marketServ.listMarketsByZip(this.zipFormGroup.value.zip).subscribe(list => {
        this.markets = list.response;
        console.log("List of Markets", this.markets);
      });
    }
  }

  listMarketsByLocation() {
    this.zipFormGroup.reset();
    this.geoServ.getPosition().then(location => {
      if(location && location.lon && location.lon) {
        //if location is found, get list of marekts.
        this.marketServ.listMarketsByLocation(location.lat.toString(), location.lon.toString()).subscribe(list => {
          this.markets = list.response;
          console.log("list of markets", this.markets);
        });
      }
      else {
        //throw error
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
