import { Component, Input } from '@angular/core';
import { SaveCacheService } from '../save-cache.service';
import { Cache } from '../cache.model';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [ SaveCacheService ]
})
export class GeocacheListComponent {
  @Input() childLocations;

  constructor(private saveCacheService: SaveCacheService) { }
  saveCache(creator: string, formattedAddress: string, lat: string, long: string) {
    let newCache: Cache = new Cache(creator, formattedAddress, lat, long);
    this.saveCacheService.addCache(newCache);
    alert('This cache has been added to your list of geocaches.');
  }

}
