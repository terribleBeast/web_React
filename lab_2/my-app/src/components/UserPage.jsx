import React, { useEffect, useState } from 'react';
import { selectUserLogin } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { deleteUser, getUser, updateUserInfo } from '../database/CRUD';


function UserPage() {

    const [userInfo, setUserInfo] = useState([])
    const userLogin = useSelector(selectUserLogin)
    const [isEditMode, setIsEditMode] = useState(false)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(
        () => {
            getUser(userLogin).then(
                data => setUserInfo(data.info)

            )
        }, [userLogin])

    // console.log(userInfo)
    
    
    const onSubmit = (data) => {
        updateUserInfo(userLogin, data.userInfo)
        setUserInfo(data.userInfo)
    }

    const onClickDeleteUser = () => {
        console.log('delete user')
        deleteUser(userLogin)
        navigate("/form")
    }

    return (
        <div>
            <h1>My page</h1>
            <h3>{userLogin}</h3>
            <p>{userInfo}</p>

            {isEditMode ? <form onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                    <Grid>
                        <Typography>
                            Information about you
                        </Typography>
                    </Grid>
                    <Grid>
                        <TextField {
                            ...register('userInfo')
                        }
                            defaultValue={userInfo.info}
                        ></TextField>
                    </Grid>
                    <Grid>
                        <input type="submit" value={'Edit'} />
                    </Grid>
                </Grid>
            </form> : null}

            <Button onClick={() => {
                setIsEditMode(!isEditMode)
            }}> {isEditMode ? 'Close panel' : 'Edit?'} </Button>
            <br />
            <Button
                style={{ display: 'flex', justifySelf: 'flex-end', color: 'red', }}
                variant="outlined"
                onClick={() => onClickDeleteUser()}
                >delete account</Button>
        </div>
    );
}

export default UserPage;
