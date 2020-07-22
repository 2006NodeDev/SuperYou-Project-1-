import React, { FunctionComponent } from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { createStyles } from '@material-ui/core'
import {  makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
 createStyles({
    root: {
        flexGrow: 1,
      },
      Button:{
          color: '#E4BF3F',
          padding: theme.spacing(1)
      }
 }),
);
export const HomePageComponent:FunctionComponent<any>=(props) =>{
const classes = useStyles();
    return(
        <div>
            <h1>WELCOME TO SUPER YOU</h1><br />
            <h2>A great place to meet and socailize with the heros you adorable and care about.</h2>
            <Button  variant="outlined" className={classes.Button}><Link to ='/login'>Login</Link></Button> <br /><br />
            <Button  variant="outlined" className={classes.Button}><Link to ='/signup'>SignUp</Link></Button>  
        </div>
    )
}