import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
  providers: [ GeolocationService ]
})
export class LocationSearchComponent {
  locations: any[]=null;

  constructor(private geoLocationService: GeolocationService) { }

  getCoordinates(lat: string, lng: string) {
    this.geoLocationService.getPhysicalAddress(lat, lng).subscribe(response => {
      this.locations = response.json();
    });
  }

  getAddress(address: string, city: string, state: string) {
    this.geoLocationService.getLatLongAddress(address, city, state).subscribe(response => {
      this.locations = response.json();
    });
  }

}
