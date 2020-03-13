import { Component, Input } from '@angular/core';

@Component({
  selector: 'space-header',
  templateUrl: 'space.header.html'
})
export class SpaceHeader {
  @Input() title;

  constructor() {}
}
