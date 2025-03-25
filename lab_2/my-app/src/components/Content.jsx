import React from 'react'
import '../App.css'


function Content({ data }) {

    return (
        <div className='container'>
            {
                Object.keys(data).map(key => (
                    <div className='item'>
                        <h4 id={`lab${key}`} className='ico'>{key}</h4>
                        <p className='txt'>
                        {data[key].map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br         />
                            </React.Fragment>))
                            }
                        </p>
                    </div>
                ))
            }
        </div>

    )
}

export default Content;