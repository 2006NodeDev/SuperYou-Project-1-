import React, { FunctionComponent } from 'react'
import { User } from '../../../../../src/models/User'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface IUserDisplayProps {
  user: User
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: "auto",
        marginTop: theme.spacing(5),
        width: theme.spacing(40),
        height: theme.spacing(35),
      },
    },
    paper: {
      backgroundColor: '#001131',
      padding: theme.spacing(1)
    },
    typography: {
      color: '#FEDBC4',
      padding: theme.spacing(1),
      fontFamily: 'monospace',
      fontSize: 18
    }
  }),
);

export const DisplayUserComponent: FunctionComponent<IUserDisplayProps> = (props) => {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
          <Typography className={classes.typography} variant='h4'>
            Username : {props.user.username}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            Email : {props.user.email}
          </Typography>
        </Paper>
    </div >
  )
}