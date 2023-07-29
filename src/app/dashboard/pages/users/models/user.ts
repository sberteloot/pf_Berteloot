export interface IUserCU {
    name : string,
    surname : string,
    email : string,
    password : string
}

export interface IUser extends IUserCU {
    id : number,
}