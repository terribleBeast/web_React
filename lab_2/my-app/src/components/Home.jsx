import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material'
import { selectLab } from '../features/labs';
import { PageOne } from './Pages';

const Home = () => {

    const indexLab = useSelector(selectLab)

    return (
        <Box>
            <Typography variant='h2'>Laboratory {indexLab+1}</Typography>

            <PageOne/>
            {console.log(indexLab)}


        </Box>
    );
}

export default Home;
