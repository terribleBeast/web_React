import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserIsLogIn } from '../features/user/userSlice';

const Auth = ({ children }) => {

    const isLogIn = useSelector(selectUserIsLogIn)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogIn) {
            navigate("/form");
        }
    }, [isLogIn, navigate]);

    // console.log('Auth', isLogIn)

    return (
        <>{children}</>
    );
}

export default Auth;
