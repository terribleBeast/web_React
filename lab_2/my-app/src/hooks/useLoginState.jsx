import React, { useEffect, useState } from 'react';

/*
 * Хук для проверки авторизации 
 *
 * @param {*} initialValue 
 * @returns 
 */
function useLoginState() {

    const stateLog = localStorage.getItem('isLogIn') === 'true';
    const [value, setValue] = useState(stateLog);

    useEffect(() => {
        // setValue(value === true || value === 'true' ? false : true);
        console.log('useLoginState', value)
    }, [localStorage])

    function handleChange() {
        setValue(value === 'true' ? 'false' : 'true');

    }
    return [value, handleChange];
}

export default useLoginState; 		