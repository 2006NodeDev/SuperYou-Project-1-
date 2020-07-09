import {PoolClient,QueryResult} from 'pg'
import {connectionPool} from "."
import {User} from '../models/User'
import { UserDTOConvertor } from '../utils/UserDTOConventor'
import { UserNotFoundError } from '../errors/UserNotFoundError'
import { InputError } from '../errors/InputError'

//get all users
export async function getAllUsers():Promise<User[]>{
    let client:PoolClient
    try{
        client = await connectionPool.connect()
        let results = await client.query(`select u."userid", 
        u."username" , 
        u."password" ,                 
        u."email" ,
        r."roleid" , 
        r."role" 
        from superyoudb.users u left join superyoudb.roles r on u."role" = r.roleid;`)
        return results.rows.map(UserDTOConvertor)
    }catch(e){
        console.log(e)
        throw new Error('Unhandled error handling')
    }finally{
        client && client.release()
    }
}
//getting by username and password
export async function getUsernameAndPassword(username:string, password:string):Promise<User>{
 let client: PoolClient
    try {
     client = await connectionPool.connect()
     let results = await client.query(`select u."userid", 
                u."username" , 
                u."password" ,                 
                u."email" ,
                r."roleid" , 
                r."role" 
                from superyoudb.users u left join superyoudb.roles r on u."role" = r.roleid 
                where u."username" = $1 and u."password" = $2;`,
            [username, password])
        if(results.rowCount === 0){
            throw new Error('un-implement error handling')
        }
        return UserDTOConvertor(results.rows[0])
    } catch (e) {
        if(e.message === 'User Not Found'){
            throw new UserNotFoundError()
        }
      
        console.log(e)
        throw new Error('Unhandled Error Occured')
    } finally {
        
        client && client.release()
    }
}
//Updating a user
export async function UserUpdate(updatedUser:User):Promise<User>{
    let client:PoolClient
    try {
        client = await connectionPool.connect()
        await client.query('BEGIN;')

        if(updatedUser.username) {
            await client.query(`update superyoudb.users set "username" = $1 
                                    where "userid" = $2;`, 
                                    [updatedUser.username, updatedUser.userId])
        }
        if(updatedUser.password) {
            await client.query(`update superyoudb.users set "password" = $1 
                                    where "userid" = $2;`, 
                                    [updatedUser.password, updatedUser.userId])
        }
        if(updatedUser.firstName) {
            await client.query(`update superyoudb.users set "firstname" = $1 
                                    where "userid" = $2;`, 
                                    [updatedUser.firstName, updatedUser.userId])
        }
        if(updatedUser.lastName) {
            await client.query(`update superyoudb.users set "lastname" = $1 
                                    where "userid" = $2;`, 
                                    [updatedUser.lastName, updatedUser.userId])
        }
        if(updatedUser.email) {
            await client.query(`update superyoudb.users set "email" = $1 
                                    where "userid" = $2;`, 
                                    [updatedUser.email, updatedUser.userId])
        }

        await client.query('COMMIT;')
        return updatedUser
    } catch (e) {
        client && client.query('ROLLBACK;')
        if(e.message === 'Role Not Found') {
            throw new InputError()
        }
        console.log(e);
        throw new Error('Unknown Error Occurred')
    } finally {
        client && client.release()
    }
}
//Signing Up
export async function NewUser(signup:User):Promise<User>{
    let client:PoolClient
    console.log(signup)

    try{
        client = await connectionPool.connect() //gives you a promise, so you take it out of the stack to prevent blocking
        
        let result:QueryResult = await client.query(`insert into superyoudb."users" ("username", "password", "firstname", "lastname", "email")
                                                        values ($1, $2, $3, $4, $5, $6, $7, $8) returning "userid"` , [signup.username, signup.password, signup.firstName, signup.lastName, 
                                                            signup.email])
        
        signup.userId = result.rows[0].userId
        return signup
       

    }catch (err){
        //add error for if username is taken 
        console.log(err)
        throw new Error('Unimplimented id error')
        
 
    }finally{
        client && client.release()

    }
 }