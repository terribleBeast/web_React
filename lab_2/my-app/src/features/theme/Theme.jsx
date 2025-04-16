import { React, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from './themeSlice';

const ChangeTheme = ({ children }) => {
    const mode = useSelector(selectTheme);
    const ThemeContext = createContext(mode);

    const theme = useContext(ThemeContext)

    console.log(selectTheme);
    return (
        <div
            style={{
                background: theme === 'light' ? '#eee' : '#222',
                color: theme === 'light' ? '#222' : '#eee',
            
                backgroundColor: theme === 'light' ? '#eee' : '#222',
            }}
        >
            {children}
        </div>
    )
}

export default ChangeTheme;
