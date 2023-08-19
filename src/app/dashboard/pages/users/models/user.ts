export interface IUserCU {
    name : string,
    surname : string,
    email : string,
    password : string,
    role : 'ADMIN' | 'USER'
}

export interface IUser extends IUserCU {
    id : number,
    token : string
}