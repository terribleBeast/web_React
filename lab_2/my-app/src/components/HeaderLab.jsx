import React, { useEffect } from 'react';
import '../App.css'

function HeaderLab({ numLab, conditionLab }) {

    // let [isActive, setBackgroundColor] = useState(false);

    const pStyle = {
        backgroundColor: conditionLab === 'done' ? 'rgba(0, 236, 20, 0.5)' : 'rgba(248, 3, 3, 0.5)'
    }

    // выполняется после рендеренга компонента 
    useEffect(() => {
        console.log(`Монтирование ${numLab}`);

        return () => {
            console.log(`Размонтирование ${numLab}`)
        }
    }, [numLab]);     

    return (
        <div className='border'>
            <p>Номер работы: {numLab}</p>
            <p style={pStyle}>Статус: {conditionLab}</p>
        </div>
    );
}

export default HeaderLab;
