import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  standalone: true,
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timeRemaining: number = 0;
  timeChange: number = 0;
  timerId: number = 0;
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  startTimer()
  {
    this.timeRemaining += 1000;

    //* Hours
    this.timeRemaining += Number((document.getElementById('hour-input') as HTMLInputElement).value) * 3600000;
    //* Minutes
    this.timeRemaining += Number((document.getElementById('minute-input') as HTMLInputElement).value) * 60000;
    //* Seconds
    this.timeRemaining += Number((document.getElementById('second-input') as HTMLInputElement).value) * 1000;

    //* Set start time
    this.timeChange = Date.now();

    // @ts-ignore
    this.timerId = setInterval(() =>
    {
      this.timeRemaining -= Date.now() - this.timeChange;
      this.timeChange = Date.now();

      this.hours = this.addZero(Math.floor(this.timeRemaining / 3600000 % 24).toString());
      this.minutes = this.addZero(Math.floor(this.timeRemaining / 60000 % 60).toString());
      this.seconds = this.addZero(Math.floor(this.timeRemaining / 1000 % 60).toString());

      if(this.timeRemaining <= 0)
      {
        this.stopTimer();
      }
    }, 1)
  }
  stopTimer()
  {
    clearInterval(this.timerId);
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
    alert('Timer Finished');
  }
  public addZero(num: string): string
  {
    return parseInt(num) >= 10 ? num : "0" + num;
  }
}
