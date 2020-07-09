import {HttpError} from './HttpError'

export class UserNotFoundError extends HttpError{
    constructor(){
        super(400,'There is no user on this site with this credentials.');
    }
}