import React from 'react';
import UsersTable from './UsersTable/UsersTable';
import { useSelector } from 'react-redux';
import { selectUserIsAdmin } from '../features/user/userSlice';

const AdminPanel = () => {
    // const isAdmin = useSelector(selectUserIsAdmin)
    const isAdmin = true

    if (isAdmin) {
        return (
            <UsersTable />
        );
    }
    else
        return (
            null
        )
}

export default AdminPanel;
