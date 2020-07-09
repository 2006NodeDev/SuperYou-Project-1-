import express,{Request,Response,NextFunction} from 'express'
import {User} from '../models/User'
import {getAllUsers,UserUpdate} from '../daos/user-daos'

export let userRouter = express.Router()

//getting all users, I'm thinking that everyone should be able to do this. Like seeing all profiles human or superhuman
userRouter.get('/', async(req:Request,res:Response,next:NextFunction)=>{
    try{
        let getUsers = await getAllUsers()
        res.json(getUsers)
    }catch(e){
        next(e)
    }
})
//update your account, you should only be able to update if you are a admin or if you are this specific user
userRouter.patch('/edit-profile',async (req:Request, res:Response, next:NextFunction)=>{
    let { 
        userId,
        username,
        password,
        firstName,
        lastName,
        email,
        role } = req.body
    if(!userId) { //update request must contain a userId
        res.status(400).send('Please enter a valid user Id')
    }
    else if(isNaN(+userId)) { //check if userId is valid
        res.status(400).send('Id must be a number')
    }
    else {
        let changeUser:User = {
            userId,
            username,
            password,
            firstName,
            lastName,
            email,
            role
        }
        changeUser.username = username || undefined
        changeUser.password = password || undefined
        changeUser.firstName = firstName || undefined
        changeUser.lastName = lastName || undefined
        changeUser.email = email || undefined
        changeUser.role = role || undefined
        try {
            let result = await UserUpdate(changeUser)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}) 
//Sign up
userRouter.post('/signup',async(req:Request, res:Response, next:NextFunction) =>{

})