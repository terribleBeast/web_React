import React from 'react'
import Menu from './Menu.jsx'
import labsList from '../labsList.json'

function Header() {
    return (
        <header style={{textAlign: `center`}}>
            <h2>
                Это заголовок
            </h2>
        <Menu data={labsList}></Menu>
            
        </header>
    )
}

export default Header;