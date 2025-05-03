import { useForm } from "react-hook-form"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { toLogIn } from "../../features/user/userSlice"
import { createUser } from "../../database/CRUD"


export const RegForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const { email, password, firstName, lastName } = watch();

    const onSubmit = useCallback(() => {

        // console.log(email, password, isRegForm)

        createUser(email, password, firstName, lastName)
            .then(isNewUser => {
                console.log(isNewUser)
                if (isNewUser !== false) {
                    dispatch(toLogIn(email))
                    navigate('/');
                }
                else
                    alert('That user already exists.')
            })

    }, [email, password, firstName, lastName, dispatch, navigate]
    )


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
            }}>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>Registration form</Typography>

            <TextField
                fullWidth
                label='First name'
                {
                ...register('firstName', {
                    required: 'First name is required',
                    minLength: {
                        value: 2,
                        message: 'First name must be at least 2 characters',
                    },
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
                margin="normal"
                sx={{ mt: 2 }}
                variant="outlined"
            />

            <TextField
                fullWidth
                label='Last name'
                {...register('lastName', {
                    required: 'Last name is required',
                    minLength: {
                        value: 2,
                        message: 'Last name must be at least 2 characters',
                    },
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                margin="normal"
                sx={{ mt: 2 }}
                variant="outlined"
            />

            <TextField
                fullWidth
                label="Email"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                    },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                margin="normal"
                sx={{ mt: 2 }}
                variant="outlined"
            />

            <TextField
                fullWidth
                type="password"
                label="Password"
                {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 5,
                        message: 'Password must be at least 5 characters',
                    },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                margin="normal"
                sx={{ mt: 2 }}
                variant="outlined"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Sign up
            </Button>

        </Box>
    )
}
