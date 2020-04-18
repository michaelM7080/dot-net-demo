import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListMarketsResponse } from '../Models/listMarketsResponse';
import { MarketDetailsResponse } from '../Models/marketDetailsResponse';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  private version: string = "/v1/market";
  private baseUrl: string = `${environment.baseUrl}${this.version}`;

  constructor(
    private http: HttpClient,
  ) { }

  listMarketsByZip(zip: string) {
    const url = `${this.baseUrl}/zip/${zip}`; 
    return this.http.get<ListMarketsResponse>(url);
  }

  listMarketsByLocation(lat: string, lon: string) {
    const url = `${this.baseUrl}/location?lat=${lat}&lon=${lon}`
    return this.http.get<ListMarketsResponse>(url);
  }

  getMarketDetailsById(marketId: string) {
    const url = `${this.baseUrl}/details/${marketId}`;
    return this.http.get<MarketDetailsResponse>(url);
  }

  flipFavoriteStatusById(marketId: string) {
    const url = `${this.baseUrl}/favorite/${marketId}`;
    return this.http.get<boolean>(url);
  }
}
