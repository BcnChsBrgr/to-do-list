
import * as React from 'react';
import {Paper, Grid, Typography, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    AddFrom: {
        padding: '20px 30px',
    },
    EventTitle: {
        paddingBottom: '10px'
    },
    inputItem: {
        width: '300px',
        minWidth: '200px',
        maxWidth: '500px'
    }
});

export default function AddItems(){
    const classes = useStyles();
    return (
        <div>
            <Typography 
                align="left"
                variant="h6"
                component="h1"

            >Add items
            </Typography>
            <Typography variant="caption" display="block">add item into your schedule</Typography>
            
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
                    Create Event:
                </Typography>
                <Grid container>
                    <Grid item>
                        <TextField 
                            label="Event Name"
                            className={classes.inputItem}
                            name="eventname"
                            
                        />
                        <TextField
                            label="Event start date" 
                            type="date"
                            name="startdate"
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField 
                            label="Event end date" 
                            type="date"
                            name="enddate"
                            InputLabelProps={{ shrink: true }} 
                            focused
                        />
                    </Grid>
                </Grid>
            </Paper>
            
    </div>);
}