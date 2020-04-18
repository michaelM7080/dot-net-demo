import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let MarketsService = class MarketsService {
    constructor(http) {
        this.http = http;
        this.version = "/v1/market";
        this.baseUrl = `${environment.baseUrl}${this.version}`;
    }
    listMarketsByZip(zip) {
        const url = `${this.baseUrl}/zip/${zip}`;
        return this.http.get(url);
    }
    listMarketsByLocation(lat, lon) {
        const url = `${this.baseUrl}/location?lat=${lat}&lon=${lon}`;
        return this.http.get(url);
    }
    getMarketDetailsById(marketId) {
        const url = `${this.baseUrl}/details/${marketId}`;
        return this.http.get(url);
    }
    flipFavoriteStatusById(marketId) {
        const url = `${this.baseUrl}/favorite/${marketId}`;
        return this.http.get(url);
    }
};
MarketsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MarketsService);
export { MarketsService };
//# sourceMappingURL=markets.service.js.map