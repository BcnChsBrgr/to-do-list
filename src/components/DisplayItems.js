import * as React from 'react';
import {Paper, Grid, Typography, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles();
export default function DisplayItems(props) {
    const classes = useStyles();
    console.log(props.DisplayItems)
    return (
        <React.Fragment>
            <Typography 
                align="left"
                variant="h6"
                component="h1"

            >Schedule
            </Typography>
            <Typography variant="caption" display="block">List scheduler</Typography>
            
            <Paper
                className={classes.AddFrom}
                component="form"
                autoComplete="off"
            >
                <Typography
                    align='left'
                    variant='h4'
                    component='h2'
                    className={classes.EventTitle}
                >
                    Item:
                </Typography>
                <Grid container spacing={3}>
                {
                    props.DisplayItems.map(item => {
                        return <Grid item xs={12}>{item.TaskName} - {item.StartDate.toString()}</Grid>
                    })
                }
                </Grid>
            </Paper>
        </React.Fragment>
    );
}