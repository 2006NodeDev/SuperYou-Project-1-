import express, { Response, Request, NextFunction } from 'express'
import { getUsernameAndPassword } from './daos/user-daos';
import {LoginError} from './errors/LoginError'
import { userRouter } from './routers/user-router';
import { loggingMiddleware } from './middleware/logging-middleware';
import { sessionMiddleware } from './middleware/session-middleware';
import { corsFilter } from './middleware/cors-filter';

const app = express();

app.use(express.json())//middleware
app.use(loggingMiddleware)//custom middleware for logging
//make sure the request is allowed 
app.use(corsFilter)
app.use(sessionMiddleware)//custom middleware for session

app.use('/users',userRouter)

app.post('/login',async (req:Request,res:Response,next:NextFunction) =>{
    let username = req.body.username
    let password = req.body.password

        if(!username || !password){
            next(new LoginError()) 
        }else{
            try{
                let user = await getUsernameAndPassword(username, password)
                req.session.user = user
                res.json(user)
            }catch(e){
                next(e)
            }
        }
})

app.use((err,req,res:Response,next)=>{
    if(err.statusCode){
        res.status(err.statusCode).send(err.message)
    }else{
        console.log(err);
        res.status(500).send('Oops something went wrong!')
    }
 })

 
//listening at port 2020
app.listen(2020, () =>{
    console.log('Started Server');
});
