import { Injectable } from '@angular/core';
import { Schedule } from "./schedule";
import { COURSES } from "./mock-courses";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private messageService: MessageService) { }

  // getCourses(): Observable<Schedule[]> {
  //   //TODO: send the message _after_ fetching the courses
  //   this.messageService.add("ScheduleService: fetched schedules");
  //   return of(COURSES);
  // }
}
