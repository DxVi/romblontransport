import React, { useState } from 'react';
import './Login.css';
import {TextField, TextareaAutosize, Button, FormControl, InputLabel, Input, InputAdornment, IconButton} from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useStateValue } from '../StateProvider';

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Visibility, VisibilityOff } from '@material-ui/icons';

  
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
      },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
  
    
function Login() {
    const [{user}] = useStateValue();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const classes = useStyles();
    return (
        <div className="login page__container">
            <div className="login__header">
                <h2>Login</h2>
                <VpnKeyIcon />
            </div>
            <div className="login__form">
                    <form className="login__input">
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="User Name" />
                            </Grid>
                            </Grid>
                        </div>
                    </form>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>



            </div>
        </div>
    )
}

export default Login
