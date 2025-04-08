import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {toLogOut } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import useLoginState from '../hooks/useLoginState';

const ButtonLog = () => {

    // const dispatch = useDispatch()
    const [loginState, setLoginState] = useLoginState();

    const LogOut = () => {
        localStorage.setItem('isLogIn', 'false')
        localStorage.setItem('login', 'None')
        setLoginState(false)
    }
    
    
    
    console.log('loginState',loginState)
    if (loginState)
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
