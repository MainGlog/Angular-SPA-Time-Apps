import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  standalone: true,
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  @Output() timeChanged: EventEmitter<void> = new EventEmitter<void>();
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  meridiem: string | undefined;

  // TODO functions and members are not accessible in the html
  // functions are not available inside the class
  constructor()
  {
    setInterval(this.calculateTime, 1000);
  }
  addZero(num: string): string
  {
    return parseInt(num) >= 10 ? num : "0" + num;
  }
  calculateTime(): void
  {
    this.timeChanged.emit();
    let date: Date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    document.getElementById('hours')!.textContent = this.hours.toString();
    document.getElementById('minutes')!.textContent = this.minutes.toString();
    document.getElementById('seconds')!.textContent = this.seconds.toString();
    document.getElementById('meridiem')!.textContent = this.meridiem!.toString();
    this.meridiem = this.hours >= 12 ? 'AM' : 'PM';
    console.log(`${this.hours}:${this.minutes}:${this.seconds} ${this.meridiem}`);
  }
}
