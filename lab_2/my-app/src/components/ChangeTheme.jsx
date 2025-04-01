import {React, useState, createContext, useContext} from 'react';


const ChangeTheme = ({children}) => {

    const [mode, setMode] = useState('light')

    const handleClick = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    const ThemeContext = createContext(mode)

    const theme = useContext(ThemeContext)

    // https://dev.to/nas5w/toggling-light-dark-theme-in-react-with-usecontext-39hn
    return (
        <div
            style={{
                background: theme === 'light' ? '#eee' : '#222',
                color: theme === 'light' ? '#222' : '#eee',
                display: 'grid',
                placeItems: 'center',
                minWidth: '320px',
                minHeight: '320px',
                // borderRadius: '4px',
                borderColor: '#222',
            }}
        >
            <p>Выбранная тема: {theme}.</p>
            <button onClick={handleClick}>Поменять тему оформления</button>
            {children}
        </div>
    )
}

export default ChangeTheme;
