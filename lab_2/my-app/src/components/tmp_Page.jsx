import React from 'react';
import {
    useGetUserQuery,
    useCreateUserMutation,
} from '../features/api/usersAPI'; // Adjust the path to your userApi.js file

import { ClipLoader } from 'react-spinners'; // Import a spinner component (install react-spinners)
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../features/user/userSlice';

function UserComponent() {

    const email = useSelector(selectUserLogin)

    const {
        data: user,
        isLoading,
        isError,
        error,
        isFetching,
    } = useGetUserQuery(email); // Use useGetUserQuery hook

    const [createUser, { isLoading: isCreating }] = useCreateUserMutation();

    const handleCreateUser = async () => {
      try {
        await createUser({ email: email, password: 'defaultPassword' }).unwrap();
        console.log('User created successfully!');
      } catch (err) {
        console.error('Failed to create user:', err);
      }
    };


    // Custom CSS for spinner
    const spinnerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px', // Adjust as needed
    };


    if (isLoading) { // Initially loading data
        return (
            <div style={spinnerStyle}>
                <ClipLoader color="#007bff" loading={true} size={30} />
                <p>Loading user data...</p>
            </div>
        );
    }

    if (isFetching) { // Re-fetching data, display a less intrusive indicator
        return (
            <div>
                {user && <p>Currently displayed user: {user.email}</p>}
                <div style={spinnerStyle}>
                    <ClipLoader color="#007bff" loading={true} size={20} />
                    <p>Fetching latest data...</p>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div style={{ color: 'red' }}>
                <p>Error fetching user:</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        );
    }

    if (user) { // Successfully fetched data
        return (
            <div>
                <h2>User Details</h2>
                <p>Email: {user.email}</p>
                <p>Info: {user.info}</p>
            </div>
        );
    }

    // No user found, offer to create a new one
    return (
      <div>
        <p>User not found. Create one?</p>
        <button onClick={handleCreateUser} disabled={isCreating}>
            {isCreating ? 'Creating...' : 'Create User'}
        </button>
      </div>
    );
}

export default UserComponent;