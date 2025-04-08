import React, { useEffect } from 'react';
import useLoginState from '../hooks/useLoginState';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {

    const logIn = useLoginState()[0];
    const navigate = useNavigate();

    useEffect(() => {
        if (!logIn) {
            navigate("/form");
        }
    }, [logIn]);

    console.log('Auth', logIn)

    return (
        <>{children}</>
    );
}

export default Auth;
