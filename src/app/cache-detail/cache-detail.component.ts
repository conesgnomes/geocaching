import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cache } from '../cache.model';
import { SaveCacheService } from '../save-cache.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cache-detail',
  templateUrl: './cache-detail.component.html',
  styleUrls: ['./cache-detail.component.scss'],
  providers: [ SaveCacheService ]
})
export class CacheDetailComponent implements OnInit {
  // savedCaches: FirebaseListObservable <any[]>;
  cacheId: string;
  cacheToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private saveCacheService: SaveCacheService) { }

  ngOnInit() {
    // this.savedCaches = this.saveCacheService.getCaches();
    this.route.params.forEach((urlParameters) => {
      this.cacheId = urlParameters['id'];
    });
    this.cacheToDisplay = this.saveCacheService.getCacheById(this.cacheId);
  }

  deleteCache(selectedCache: Cache) {
    this.saveCacheService.deleteCache(selectedCache);
    alert("This cache has been deleted from your list of saved geocaches.");
  }

}
