import React from 'react'; // ядро React 
import ReactDOM from 'react-dom/client'; // ядро React
import './index.css';
import App from './App';
import ChangeTheme from './components/ChangeTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <ChangeTheme>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChangeTheme>
);
