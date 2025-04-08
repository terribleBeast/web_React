import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {

    const [feedbacks, setFeedbacks] = useState([])

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setFeedbacks([...feedbacks, data.feedback])
        console.log(feedbacks)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="your feedback" {...register("feedback")} />
                <button type="submit">submit</button>
            </form>

            <ul>
                asc
                {feedbacks.map((feedback, index) => (
                    <li key={index}> {feedback}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
