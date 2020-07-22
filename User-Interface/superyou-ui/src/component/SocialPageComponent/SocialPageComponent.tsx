import React, { FunctionComponent, useEffect, useState } from 'react'
import { DisplayUserComponent } from '../DisplayUserComponent/DisplayUser'
import { User } from '../../../../../src/models/User'
import { superyouGetAllUsers } from '../../remote/SuperYou-api/superyousocialpage'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(5),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    fixedHeight: {
        height: 600,
    },
}));
export const SocialPageComponent:FunctionComponent<any> =(props) =>{
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allUsers, changeAllUsers] = useState<User[]>([])

    useEffect(() => {
        const getUsers = async () => {
            let response = await superyouGetAllUsers()
            changeAllUsers(response)
        }

        if (allUsers.length === 0) {

            getUsers()
        }
    })

    let userDisplays = allUsers.map((user) => {
        return <DisplayUserComponent key={'user-key-' + user.userId} user={user} />
    })

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {userDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}