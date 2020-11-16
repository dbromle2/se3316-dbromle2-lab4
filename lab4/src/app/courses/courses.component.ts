import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { COURSES } from "../mock-courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = COURSES;
  // course: Course = {
  //   subject: "SE",
  //   catalog_nbr: "3316A",
  //   name: "Web Tech",
  //   component: "LEC"
  // };
  selectedCourse: Course;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }
}
