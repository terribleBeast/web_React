import React from 'react'
import ButtonTheme from './ButtonTheme';

function Header({ children }) {
    return (
        <header>

                <ButtonTheme></ButtonTheme>
                <h2>
                    Это заголовок
                </h2>

            {children}
        </header>
    )
}

export default Header;