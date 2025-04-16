import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLogIn, toLogOut } from '../features/user/userSlice';

const ButtonLog = () => {

    const dispatch = useDispatch()

    const isLogIn = useSelector(selectUserIsLogIn)

    const LogOut = () => {
        dispatch(toLogOut())
    }
    
    
    
    console.log('loginState',isLogIn)
    if (isLogIn)
    {
        return (
            <div>
                <Button color="inherit" component={Link} to="/form" onClick={LogOut}>Log out</Button>
            </div>
        );
    }
    else {
        return (
            <div>
                <Button color="inherit" component={Link} to="/form">Log in</Button>
            </div>
        );
    }
}

export default ButtonLog;
