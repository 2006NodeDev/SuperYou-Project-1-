import {Role} from './Role'

//User information
export class User{
    userId:number //not null
    username:string //not null
    password:string //not null
    firstName:string //not null
    lastName:string //not null
    email:string //not null
    role:Role //not null
}