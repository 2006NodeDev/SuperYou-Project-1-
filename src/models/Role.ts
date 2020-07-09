//This model will be used to track the roles that users have
//There will be two admin users that will have permissions to see all users
//Your can be role is Normal,Superhuman, or Admin

export class Role{
    role_id:number //primary key
    role:string // not null unique
}