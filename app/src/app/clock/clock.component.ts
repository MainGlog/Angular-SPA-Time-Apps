import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  standalone: true,
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  meridiem: string | undefined;

  // TODO functions and members are not accessible in the html
  // functions are not available inside the class
  constructor() {

    setInterval(() =>
    {
      let date: Date = new Date();
      this.hours = this.addZero((date.getHours() >= 12 ?
          (date.getHours() % 12 + 12).toString() :
          date.getHours().toString()));
      this.minutes = this.addZero(date.getMinutes().toString());
      this.seconds = this.addZero(date.getSeconds().toString());
      this.meridiem = Number(date.getHours()) <= 12 ? 'PM' : 'AM';
    }, 1000);
  }
  addZero(num: string): string
  {
    return String(parseInt(num) >= 10 ? num : "0" + num);
  }
}
