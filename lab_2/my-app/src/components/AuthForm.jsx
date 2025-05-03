import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { toLogIn } from "../features/user/userSlice"
import { createUser, getUser } from "../database/CRUD"
import { roRO } from "@mui/x-date-pickers/locales"

// import './../App.css'




const AuthForm = () => {
  const [isRegForm, setStateLog] = useState(true);

  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm()

  const dispatch = useDispatch()

  const { email, password } = watch();

  const onSubmit = useCallback(() => {

    // console.log(email, password, isRegForm)

    if (!isRegForm) {
      getUser(email)
        .then(data => {
          console.log(data)
          if (data !== undefined && data.password === password) {
            dispatch(toLogIn({ email: data.email, role: data.role, id: data.id }))
            navigate('/')
          }
        })
    }
    else {
      createUser(email, password)
        .then(isNewUser => {
          console.log(isNewUser)
          if (isNewUser) {
            dispatch(toLogIn(email, 'user'))
            navigate('/');
          }
          else
            alert('That user already exists.')
        })


      // добавляем в хранилище
    }
  }, [email, password, isRegForm, dispatch, navigate]
  )


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid >
          <Grid item >
            <Typography>
              Email
            </Typography>
            <TextField {
              ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                }
              })}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <Typography>
              Password
            </Typography>
            <TextField {
              ...register('password', { required: true, minLenght: 4 })}
              type="password"
            />
          </Grid>
          <Grid item >
            <input type="submit" value={isRegForm ? 'Зарегистрироваться' : 'Войти'}></input>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>

      </form>
      <Button onClick={() => {
        setStateLog(!isRegForm)
      }}> {isRegForm ? 'Уже зарегистрированы?' : 'Нет аккаунта?'} </Button>

    </div>
  )
}

export default AuthForm;

