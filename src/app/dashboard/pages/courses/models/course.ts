export interface ICourseCU {
    name:string;
    price:number;
    start:Date;
    description:string
}

export interface ICourse extends ICourseCU {
    id:number;    
}