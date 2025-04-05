import {React, useState} from 'react';
import { toDark, toLight } from '../features/theme/themeSlice';
import { useDispatch } from 'react-redux';

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
        <button style={{display: 'flex', justifySelf: 'right'}}onClick={handleClick}>{mode}</button>
    );
}

export default ButtonTheme;
