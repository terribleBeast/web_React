import React from 'react'

function Container({data}) {
    return (

        <ul>
        
            {data.map((data1, index) => (
                <li key={index}>{data1}</li>
            ))}
        </ul>

    )
}

export default Container;
