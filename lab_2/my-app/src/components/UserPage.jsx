import React, { useEffect, useState } from 'react';
import { selectUserLogin } from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography, Box } from "@mui/material"
import { deleteUser, getUser, updateUserInfo } from '../database/CRUD';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';


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
        <Box >
            <Typography variant='h4'>My page</Typography>

            <Box style={{ textAlign: 'left' }}>
                <Typography variant='h6'>Email: {userLogin}</Typography>
                <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h6' >About me:</Typography>
                    {isEditMode ?
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField {
                                ...register('userInfo')
                            }
                                defaultValue={userInfo}

                            ></TextField>

                            <Grid>
                                <Button type="submit">Edit</Button>
                            </Grid>
                        </form> :
                        <Typography style={{ maxWidth: '70%', wordBreak: 'break-word' }}>{userInfo}</Typography>}

                    <Button onClick={() => {
                        setIsEditMode(!isEditMode)
                    }}> {isEditMode ? <CloseIcon /> : <EditIcon />} </Button>
                </Grid>
            </Box>

            <br />

            <Button
                style={{
                    display: 'flex', 
                    justifySelf: 'end',
                    alignSelf: 'flex-end',
                    color: 'red',
                }}
                variant="outlined"
                onClick={() => onClickDeleteUser()}
            >delete account</Button>
        </Box >
    );
}

export default UserPage;
