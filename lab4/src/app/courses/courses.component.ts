import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { COURSES } from "../mock-courses";
import { CourseService } from "../course.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course;

  courses: Course[];


  constructor(private courseService: CourseService, private messageService: MessageService) { }

  ngOnInit(): void {
    // this.getCourses();
  }

  onSelect(course: Course): void{
    this.selectedCourse = course;
    this.messageService.add(`CoursesComponent: Selected course id=${course.subject}${course.catalog_nbr}`);
    //this.getCourse(course.subject);
  }

  onSearch(): void {
    let subSel = (<HTMLInputElement>document.getElementById("subjectInput")).value;
    let corSel = (<HTMLInputElement>document.getElementById("catalogInput")).value;
    let comSel = (<HTMLInputElement>document.getElementById("componentInput")).value;

    console.log("Server sent these inputs:  " + subSel + " " + corSel + " " + comSel + " "); //testing

    this.getCourse(subSel, corSel);
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }
  
  getCourse(subject: string, catalog_nbr: string): void {
    this.courseService.getCourses(/*subject: string, catalog_nbr: string*/).subscribe(courses => this.courses = courses);
  }
}
