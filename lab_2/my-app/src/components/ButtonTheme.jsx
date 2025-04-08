import {React, useState} from 'react';
import { toDark, toLight } from '../features/theme/themeSlice';
import { useDispatch } from 'react-redux';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Иконка темной темы
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Иконка светлой темы
import { IconButton } from '@mui/material';

const ButtonTheme = () => {
    const [mode, setMode] = useState('light')

    const dispatch = useDispatch()
    const handleClick = () => {
        if (mode === 'light') {
            setMode('dark');
            dispatch(toDark());
        }
        else {
            setMode('light')
            dispatch(toLight());
        }
    }
    return (

        <IconButton onClick={handleClick} color="inherit">
          {mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
    );
}

export default ButtonTheme;
