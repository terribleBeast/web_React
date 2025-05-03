import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material'
import { selectLab } from '../features/labsSlice';
import { PageOne } from './Pages';
import UsersTable from './UsersTable/UsersTable';

const UserComponent = lazy(() => import('./tmp_Page'))

const Home = () => {

    const indexLab = useSelector(selectLab)

    return (
        <Box>
            {/* <Typography variant='h2'>Laboratory {indexLab + 1}</Typography>

            <PageOne />
            {console.log(indexLab)}
            <Suspense>
                <UserComponent />
            </Suspense> */}
            <UsersTable/>
        </Box>
    );
}

export default Home;
