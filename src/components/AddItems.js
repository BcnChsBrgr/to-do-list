
import * as React from 'react';
import {Paper, Grid, Typography, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    AddFrom: {
        padding: '20px 30px',
        backgroundColor: 'white',
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
        <React.Fragment>
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
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <TextField 
                                    label="Event Name"
                                    className={classes.inputItem}
                                    name="TaskName"
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Event start date" 
                                    type="date"
                                    name="StartDate"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    label="Event end date" 
                                    type="date"
                                    name="EndDate"
                                    InputLabelProps={{ shrink: true }} 
                                    focused
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    id='Description'
                                    label='Description'
                                    name='Description'
                                    row={4}
                                    className={classes.inputItem}
                                />
                            </Grid>

                            <Grid item xs={12}>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}></Grid>
                </Grid>
            </Paper>
    </React.Fragment>);
}