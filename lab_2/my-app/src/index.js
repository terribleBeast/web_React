import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from './features/theme/Theme'
import { Provider } from 'react-redux'
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <App />
            </Theme>
        </Provider>
    </React.StrictMode>
);
