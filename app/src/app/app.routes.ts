import { Routes } from '@angular/router';
import {ClockComponent} from './clock/clock.component';
import {StopwatchComponent} from './stopwatch/stopwatch.component';
import {TimerComponent} from './timer/timer.component';

export const routes: Routes = [
  { path: '', component: ClockComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'timer', component: TimerComponent }
];
