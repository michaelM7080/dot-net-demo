import { Injectable } from '@angular/core';
import { Geolocation } from '../Models/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition(): Promise<Geolocation> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lat: resp.coords.latitude, lon: resp.coords.longitude});
      }, err => {
        reject(err);
      });
    })
  }
}
