import { Injectable } from '@angular/core';
import { Course } from "./course";
import { COURSES } from "./mock-courses";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private coursesUrl = "/api/courses" //from lab3

  /**GET all courses (subject and course name) **/
  getCourses(): Observable<Course[]> {
    //TODO: send the message _after_ fetching the courses
    this.messageService.add("CourseService: fetched courses");
    return this.http.get<Course[]>(this.coursesUrl)/*.pipe(tap(_ => this.log("fetched courses")), catchError(this.handleError<Course[]>("getCourses",[])));*/
    //return of(COURSES);
  }

  /**GET course by subject code, will 400 if not found **/
  // getCourse(subject: string): Observable<Course>{
  //   const url = `${this.coursesUrl}/${subject}`;
  //   return this.http.get<Course>(url).pipe(tap(_ => this.log(`fetched course codes for given subject=${subject}`)), catchError(this.handleError<Course>(`getCourse subject=${subject}`)));
  // }

  private log(message: string) {
    this.messageService.add(`CourseService: ${message}`);
  }

  /*Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}

