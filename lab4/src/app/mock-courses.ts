import { Subject } from 'rxjs';
import { Course } from "./course";

export const COURSES: Course[] = [
    {subject: "ECE", catalog_nbr: "3330A", name: "Controls", component: "LEC"},
    {subject: "ECE", catalog_nbr: "4415A", name: "Capstone", component: "LEC"},
    {subject: "SE", catalog_nbr: "3316A", name: "Web Tech", component: "LEC"},
    {subject: "SE", catalog_nbr: "4452A", name: "Software Testing & Maintenance", component: "LEC"}
];