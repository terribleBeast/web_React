import React from 'react'

function Content({data}) {

    Object.keys(data).map(key => console.log(key))

    return (
        <div>
    {Object.keys(data).map(key => (<><h4 id={`#lab${key}`}>{key}</h4><p>{data[key]}</p></>))}        
        </div>
        
    )
}

export default Content;