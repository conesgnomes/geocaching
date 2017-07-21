import { Component, OnInit } from '@angular/core';
import { SaveCacheService } from '../save-cache.service';
import { Cache } from '../cache.model';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-cache-list',
  templateUrl: './user-cache-list.component.html',
  styleUrls: ['./user-cache-list.component.scss'],
  providers: [ SaveCacheService ]
})

export class UserCacheListComponent implements OnInit {

  savedCaches: FirebaseListObservable <any[]>;

  constructor(private saveCacheService: SaveCacheService, private router: Router) { }

  ngOnInit() {
    this.savedCaches = this.saveCacheService.getCaches();
  }

  goToDetailPage(clickedCache) {
    this.router.navigate(['caches', clickedCache.$key]);
  }

  deleteCache(selectedCache: Cache) {
    this.saveCacheService.deleteCache(selectedCache);
    alert("This cache has been deleted from your list of saved geocaches.");
  }

}
