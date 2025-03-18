import React from 'react'



function Menu({ data }) {

  return (
    <div >
      <ul>
        {
          Object.keys(data).map(key => (
            <li style={{display: `inline`, marginRight: `10px`
            }}>
              <a href={`#lab${key}`}>{key}</a>
            </li>)
          )
        }
      </ul>
    </div>
  )
}

export default Menu;