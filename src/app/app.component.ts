/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import * as moment from 'moment';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../sass/main.scss'],
  template: `
    <div class="background-img"></div>
    <main>
      <router-outlet></router-outlet>
    </main>


  `
})
export class AppComponent {

  constructor(
    public appState: AppState) {
    moment.locale('ar-SA');
  }

  ngOnInit() {
  }

}
