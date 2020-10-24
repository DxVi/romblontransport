import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid({origin, destination, rental}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       {
           origin ? 
           (
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>{`${origin} > ${destination}`}</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>{rental}</Paper>
                </Grid>
            </Grid>
           )
           :
           (
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>{destination}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>{rental}</Paper>
                </Grid>
            </Grid>
           )
       } 
      
    </div>
  );
}
