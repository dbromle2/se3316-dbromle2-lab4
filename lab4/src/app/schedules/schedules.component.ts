import { Component, OnInit } from '@angular/core';
import { Schedule } from "../schedule";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedule: Schedule = {
    name: "1"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
