import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
const counter = timer(0, 1000);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public clock:string ='';
  constructor() { }

  ngOnInit(): void {
    counter.subscribe(() => {
      this.time();
    });
  }
  currentDate = new Date();

  time() {
    let date = new Date();
    let second:number | string = date.getSeconds();
    let minute:number | string = date.getMinutes();
    let hour:number | string = date.getHours();
    if (second < 10) {
      second = '0' + second
    }
    if (minute < 0) {
      minute = '0' + minute;
    }
    this.clock = hour + ":" + minute + ":" + second;
  }
}
