import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [],
  templateUrl: './stopwatch.component.html',
  standalone: true,
  styleUrl: './stopwatch.component.css'
})
export class StopwatchComponent {
  public hours: string = '00';
  public minutes: string = '00';
  public seconds: string = '00';
  public ms: string = '00';
  public paused: boolean = false;
  public started: boolean = false;
  public stopwatchId: number = 0;
  public time: number = 0;
  public addZero(num: string): string
  {
    return parseInt(num) >= 10 ? num : "0" + num;
  }

  start():void
  {
    if(this.paused)
    {
      this.started = true;
      this.paused = false;
    }
    else if(!this.started)
    {
      this.started = true;
      this.time = Date.now();
    }
    // @ts-ignore
    this.stopwatchId = setInterval(() => {
      let swTime: number = Date.now() - this.time;
      this.ms = (swTime % 1000).toString();
      this.seconds = this.addZero(Math.floor(swTime / 1000 % 60).toString());
      this.minutes = this.addZero(Math.floor(Number(this.seconds) / 60).toString());
      this.hours = this.addZero(Math.floor(Number(this.minutes) / 24).toString());
    }, 1);
  }
  stop()
  {
    this.paused = true;
    this.started = false;
    clearInterval(this.stopwatchId);
  }

  reset()
  {
    clearInterval(this.stopwatchId);
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
    this.ms = '00';
    this.paused = false;
    this.started = false;
  }
}
