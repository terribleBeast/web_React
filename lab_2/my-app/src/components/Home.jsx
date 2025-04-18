import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../features/user/userSlice';
import { deleteUserRespond, getUsers, updateUserRespond } from '../database/CRUD';
import { Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

const Home = () => {

    const userLogin = useSelector(selectUserLogin);
    const [feedbacks, setFeedbacks] = useState([]);
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        getUsers().then(data => {
            const transformedFeedbacks = new Map(
                data.map(user => ([
                    user.email,
                    user.responds
                ])));
            setFeedbacks(transformedFeedbacks);
        });
    }, []);

    // console.log(feedbacks.get('guest@mail.com'))

    const onSubmitAddFeedback = (data) => {

        feedbacks.get(userLogin).push(data.feedback)
        setFeedbacks(new Map([...feedbacks]))
        updateUserRespond(userLogin, data.feedback)
    };

    const onClickDeleteFeedback = (indexRespond) => {

        deleteUserRespond(userLogin, indexRespond)
        
        feedbacks.get(userLogin).splice(indexRespond, 1)
        setFeedbacks(new Map([...feedbacks]))
        console.log(feedbacks)
        // console.log('click')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitAddFeedback)}>
                <input type="text" placeholder="your feedback" {...register("feedback")} />
                <button type="submit">submit</button>
            </form>

            <ul style={{ justifySelf: 'start' }}>
                {feedbacks.keys().map((email) => (
                    <li style={{ textAlign: 'left' }} key={email}>
                        {email}
                        <ul style={{ justifySelf: 'start' }}>
                            {feedbacks.get(email).map((respond, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p style={{ display: 'inline', maxWidth: '80%', wordBreak:'break-word'}}>{respond}</p>
                                    {email === userLogin ? (
                                        <Button onClick={() => onClickDeleteFeedback(index)}>
                                            <ClearIcon />
                                        </Button>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default Home;
