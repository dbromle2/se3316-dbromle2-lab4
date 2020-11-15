import { Component, OnInit } from '@angular/core';
import courses from 'src/assets/Lab3-timetable-data.json';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() {
    let myArr = []; 
    for(var i=0; i < courses.length; i++){
      myArr[i] = courses[i].subject + " " + courses[i].className;
    }
    console.log(myArr);
  }

  ngOnInit(): void {
  }

}