import React from 'react'



function Menu({ data }) {

  const liStyle = {display: 'inline'}

  return (
    <ul >
      {Object.keys(data).map(key => ( <li style={liStyle}><a href={`#lab${key}`}>{key} </a></li> ))}
    </ul>
  )
}

export default Menu;