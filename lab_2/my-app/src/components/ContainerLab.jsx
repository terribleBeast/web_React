import React from 'react'
import '../App.css'

function ContainerLab({ data }) {
    return (
        <ul className='txt'>
            {data.map((line) => (
                <li>
                    {line}
                </li>))
            }
        </ul>
    )
}

export default ContainerLab;
