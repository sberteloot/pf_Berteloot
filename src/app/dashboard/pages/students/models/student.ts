export interface IStudentCU {
    name : string,
    surname : string,
    email : string,
    birth : Date
}

export interface IStudent extends IStudentCU {
    id : number,
}