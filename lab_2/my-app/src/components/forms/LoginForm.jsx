import { useForm } from "react-hook-form"
import { Box, Button, TextField, Typography, 
    // Checkbox, FormControlLabel for reminde me
} from "@mui/material"
import { useNavigate } from 'react-router'
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { toLogIn } from "../../features/user/userSlice"
import { getUser } from "../../database/CRUD"

export const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const { email, password } = watch()

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(value)) {
            return 'Invalid email address';
        }
        return true;
    };

    const onSubmit = useCallback(() => {

        getUser(email)
            .then(data => {
                console.log(data)
                if (data !== undefined && data.password === password && !data.isBlocked) {
                    dispatch(toLogIn({email: email, role: data.role}))
                    navigate('/')
                    console.log('Login successful',);
                }
                else{
                    setMessage("User don't exist or password is wrong or you are blocked")
                }

            })

    }, [email, password, dispatch, navigate])

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
            }}
        >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Login Form
            </Typography>
            <TextField
                fullWidth
                label='Email'
                {...register('email', {
                    required: 'Email is required',

                    validate: validateEmail,
                })}
                variant="outlined"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                margin="normal"
                sx={{ mt: 2 }}
            />
            <TextField
                fullWidth
                type="password"
                label="Password"
                {...register('password', {
                    required: 'Password is required',

                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                margin="normal"
                sx={{ mt: 2 }}
            />
            {/* <FormControlLabel
                control={<Checkbox {...register('rememberMe')} color="primary" />}
                label="Remember Me"
                sx={{ mt: 1, textAlign: 'left' }}
            /> */}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Login
            </Button>
            <Typography component='p' sx={{ mb: 2 }}>
                {message}
            </Typography>
        </Box>
    );
};