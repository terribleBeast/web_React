import { useEffect, useState } from 'react';
import { selectUserIsLogIn, toLogIn, toLogOut } from '../features/user/userSlice';
import { useSelector } from 'react-redux';


/*
 * Хук для проверки авторизации 
 *
 * @param {*} initialValue 
 * @returns 
 */

function useLoginState() {

    const isLogIn = useSelector(selectUserIsLogIn) !== null;

    // const stateLog = localStorage.getItem('isLogIn') === 'true';
    const [value, setValue] = useState(isLogIn);

    useEffect(() => {
        setValue(!value);
        console.log('useLoginState', value)
    }, [isLogIn])

    function handleChange() {
        setValue(value ? false : true);

    }
    return [value, handleChange];
}

export default useLoginState; 		