import React, {FunctionComponent, useState, SyntheticEvent} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {superyousignup} from '../../remote/SuperYou-api/superyousignup' //must change this 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const SignUpComponent:FunctionComponent<any> =(props) =>{
    //username and a password 
    const classes = useStyles();
    const [role, changeRole] = useState('');
    const[username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    const[firstName, changeFirstname] = useState('')
    const[lastName, changeLastname] = useState('')
    const[email, changeEmail] = useState('')

  
    const updatePassword = (event:any)=> {//get callback for events
        event.preventDefault() //stop default behavior of the event 
        changePassword(event.currentTarget.value)
    }
    const updateUsername = (event:any)=> {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const updateFirstname = (event:any)=> {//get callback for events
        event.preventDefault() //stop default behavior of the event 
        changeFirstname(event.currentTarget.value)
    }
    const updateLastname = (event:any)=> {//get callback for events
        event.preventDefault() //stop default behavior of the event 
        changeLastname(event.currentTarget.value)
    }
    const updateEmail = (event:any)=> {//get callback for events
        event.preventDefault() //stop default behavior of the event 
        changeEmail(event.currentTarget.value)
    }
    const updateRole = (event: React.ChangeEvent<{ value: unknown }>) => {
        changeRole(event.target.value as string)
    }
    const signupSubmit = (e:SyntheticEvent) =>{ 
        e.preventDefault()
        superyousignup(username, password,firstName,lastName,email,role)
        changePassword('')
    }

    return(
        <div>
            <form autoComplete="off" onSubmit={signupSubmit}>
            
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={updateUsername} /><br/><br />
            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={updatePassword}/><br /><br />
            <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={updateFirstname} /><br/><br />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName}  onChange={updateLastname} /><br/><br />
            <TextField id="outlined-basic" label="Email" variant="outlined"  value={email} onChange={updateEmail} /><br/><br />
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-outlined-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={role}
                      onChange={updateRole}
                      label="Role">
                     <MenuItem>Superhuman</MenuItem>
                     <MenuItem>Normal</MenuItem>
                   </Select>
                
            </FormControl><br/><br/>
            <Button type="submit" variant="outlined" color="primary" href="#outlined-buttons">Sign Up</Button>
            </form>
        </div>
    )
}