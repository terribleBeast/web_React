import React from 'react';
import { Navigate} from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserIsAdmin } from '../features/user/userSlice';


const ProtectedRoute = ({ children }) => {
    const isAdmin = useSelector(selectUserIsAdmin);
    
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;