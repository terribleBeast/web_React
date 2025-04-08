import { React, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from './userSlice';

const ChangeTheme = ({ children }) => {
    const mode = useSelector(selectTheme);
    const ThemeContext = createContext(mode);
    const theme = useContext(ThemeContext)

    // console.log(selectTheme);
    // https://dev.to/nas5w/toggling-light-dark-theme-in-react-with-usecontext-39hn
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
