import React from 'react'
import '../App.css'
// import ContainerLab from './ContainerLab';
// import HeaderLab from './HeaderLab';

function Content({ children }) {

    // const [numLab, setV] = useState(1);
       

    // function changeNumber(event) {

    //     setV(event.target.value);
    // }
    
    return (
        <div className='container border'>
            {/* <div style={{display:'flex', justifyContent: 'space-evenly'}}>

                <HeaderLab numLab={numLab} conditionLab={data[numLab].condition}></HeaderLab> 
                <input type='range' min="1" max="9" value={numLab} onChange={changeNumber} />
            </div>
            <ContainerLab data={data[numLab].body} key={numLab} /> */}
            {children}
        </div>
    )
}

export default Content;