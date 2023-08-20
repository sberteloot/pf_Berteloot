import { ICourse } from "../../courses/models/course";
import { IStudent } from "../../students/models/student";

export interface IInscriptionCU {
    studentId : number | null,
    courseId : number | null,
}

export interface IInscription extends IInscriptionCU {
    id : number,
    student : IStudent,
    course : ICourse
}