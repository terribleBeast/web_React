import React from 'react'


function Header({ children }) {
    return (
        <header>

            <div style={{display: 'flex', justifySelf: 'right'}}>
            </div>
           

            {children}
        </header>
    )
}

export default Header;