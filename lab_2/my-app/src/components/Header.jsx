import React from 'react'

function Header({children}) {
    return (
        <header style={{ textAlign: `center` }}>
            <h2>
                Это заголовок
            </h2>
            {children}
        </header>
    )
}

export default Header;