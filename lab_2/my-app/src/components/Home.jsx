import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectUserIsLogIn } from '../features/user/userSlice';

const Home = () => {


    const user = useSelector(selectUserIsLogIn)
    const [feedbacks, setFeedbacks] = useState([])

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setFeedbacks([...feedbacks, data.feedback])
        console.log(feedbacks)
    };
    console.log(user)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="your feedback" {...register("feedback")} />
                <button type="submit">submit</button>
            </form>

            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}> {feedback}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
