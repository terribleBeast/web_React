import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

function Menu() {

  const location = useLocation();
  useEffect(() => {

    console.log(`Current location is`, location.pathname)

    return (() => {console.log(`Previos location was`, location.pathname)
    })
  }, [location])

  return (
    <div style={{ textAlign: `left` }}>
      <nav>
        <ul>
          <li>
            <Link to="/one">Page One</Link>
          </li>
          <li>
            <Link to="/two">Page Two</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Menu;