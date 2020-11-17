import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const courses = [
      {
        catalog_nbr: "1002F",
        subject: "WRITING",
        className: "INTRO TO WRITING IN ENGLISH",
        course_info: [
          {
            class_nbr: 8933,
            start_time: "6:30 PM",
            descrlong: "",
            end_time: "9:30 PM",
            campus: "Kings",
            facility_ID: "KC-BH107",
            days: [
              "Th"
            ],
            instructors: [],
            class_section: 570,
            ssr_component: "LEC",
            enrl_stat: "Full",
            descr: "RESTRICTED TO STUDENTS REGISTERED AT KINGS."
          }
        ],
        catalog_description: "This course is an introduction to academic writing for first-year English as a Second Language students in all disciplines. Topics range from grammar, sentence structure, and paragraphing to the principles of scholarly argument and research.\n\nAntirequisite(s): The former Writing 0002F/G, Writing 1020F/G, Writing 1021F/G, Writing 1022F/G, Writing 2101F/G.\n\nExtra Information: 3 lecture hours."
      },
      {
        catalog_nbr: "1002G",
        subject: "WRITING",
        className: "INTRO TO WRITING IN ENGLISH",
        course_info: [
          {
            class_nbr: 8938,
            start_time: "1:30 PM",
            descrlong: "",
            end_time: "4:30 PM",
            campus: "Kings",
            facility_ID: "KC-LH220",
            days: [
              "M"
            ],
            instructors: [],
            class_section: 570,
            ssr_component: "LEC",
            enrl_stat: "Full",
            descr: "RESTRICTED TO STUDENTS REGISTERED AT KINGS."
          }
        ],
        catalog_description: "This course is an introduction to academic writing for first-year English as a Second Language students in all disciplines. Topics range from grammar, sentence structure, and paragraphing to the principles of scholarly argument and research.\n\nAntirequisite(s): The former Writing 0002F/G, Writing 1020F/G, Writing 1021F/G, Writing 1022F/G, Writing 2101F/G.\n\nExtra Information: 3 lecture hours."
      },
      {
        catalog_nbr: "1020F",
        subject: "WRITING",
        className: "INTRO TO UNIV ESSAY WRITING",
        course_info: [
          {
            class_nbr: 7702,
            start_time: "10:30 AM",
            descrlong: "",
            end_time: "11:30 AM",
            facility_ID: "BR-MRW152",
            days: [
              "W"
            ],
            instructors: [],
            class_section: 530,
            ssr_component: "LEC",
            enrl_stat: "Full",
            descr: "RESTRICTED TO STUDENTS REGISTERED AT AN AFFILIATED UNIVERSITY COLLEGE."
          }
        ],
        catalog_description: "A practical introduction to the basics of successful academic writing, designed for first-year students in all disciplines. Topics will range from grammar, sentence structure, and paragraphing to the principles of scholarly argument and research. \n\nAntirequisite(s): Writing 0002F/G, Writing 1002F/G, Writing 1021F/G, Writing 1022F/G, Writing 2101F/G.\n\nExtra Information: 3 lecture/tutorial hours. [This course will not serve as a prerequisite for any area of concentration]"
      }
    ];
    return {courses};
  }
}
