import React, {FunctionComponent, useState, SyntheticEvent} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {superyoulogin} from '../remote/SuperYou-api/superyoulogin'

export const LoginComponent:FunctionComponent<any> =(props) =>{
    //username and a password 

    const[username, changeUsername] = useState(' ')
    const [password, changePassword] = useState(' ')

    const updatePassword = (event:any)=> {//get callback for events
        event.preventDefault() //stop default behavior of the event 
        changePassword(event.currentTarget.value)
    }
    const updateUsername = (event:any)=> {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const loginSubmit = (e:SyntheticEvent) =>{
        e.preventDefault()
        superyoulogin(username, password)
        changePassword('')
    }
    return(
        <div>
            <form autoComplete="off" onSubmit={loginSubmit}>
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={updateUsername} /><br/><br />
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={updatePassword}/><br /><br />
            <Button type="submit" variant="outlined" color="primary" href="#outlined-buttons">Login</Button>
            </form>
        </div>
    )
}