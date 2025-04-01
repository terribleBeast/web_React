import React from 'react'
import '../App.css'

function ContainerLab({ data }) {
    return (
        <ul style={{textAlign: 'left'}}>
            {data.map((line) => (
                <li>
                    {line}
                </li>))
            }
        </ul>
    )
}

export default ContainerLab;
