import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import {CalendarComponent} from './calendar';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: CalendarComponent },
  { path: 'calendars', component: CalendarComponent},
  { path: '**',    component: NoContentComponent },
];
