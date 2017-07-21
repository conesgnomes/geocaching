import { geoKey } from '../api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

  getLatLongAddress(address: string, city: string, state: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+","+city+","+state+"&key="+geoKey);
  }

}
