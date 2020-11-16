import { Component, OnInit } from '@angular/core';
import { Course } from "../course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course: Course = {
    subject: "SE",
    catalog_nbr: "3316A",
    component: "LEC"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
