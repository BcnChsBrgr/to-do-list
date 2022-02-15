import * as React from 'react';
import {Paper, Grid, Typography, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({

    EventTitle: {
        paddingBottom: '10px'
    },
    paper: {
        padding: '20px 30px',
        backgroundColor: 'white',
    }
});
export default function DisplayItems(props) {
    const classes = useStyles();
    console.log(props.DisplayItems)
    let items 
    if(Array.isArray(props.DisplayItems)){
        if(props.DisplayItems.length > 0) {
            items = props.DisplayItems.map(item => {
                return <Grid item xs={12}>{item.TaskName} - {item.StartDate.toString()}</Grid>
            })
        } else {
            items = <Grid item xs={12}>There isn't any item(s).</Grid>
        }
    }
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
                className={classes.paper}
                component="form"
                autoComplete="off"
            >
                <Typography
                    align='left'
                    variant='h4'
                    component='h2'
                    className={classes.EventTitle}
                >
                    Item(s):
                </Typography>
                <Grid container spacing={3}>
                {
                    items
                }
                </Grid>
            </Paper>
        </React.Fragment>
    );
}