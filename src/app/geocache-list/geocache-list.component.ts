import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.scss'],
  providers: [ ]
})
export class GeocacheListComponent {
  @Input() childLocations;

  constructor() { }

}
