import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { toLogIn } from "../features/user/userSlice"

// import './../App.css'




const Form = () => {
  const [isRegForm, setStateLog] = useState(true);

  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm()

  const dispatch = useDispatch()

  const { login, password } = watch();

  const onSubmit = useCallback((data) => {

    console.log(data, isRegForm)
    if (!isRegForm & login === 'admin' & password === '1234') {
      // localStorage.setItem('isLogIn', 'true')
      // localStorage.setItem('login', data.login)
      dispatch(toLogIn())
      console.log('dispatch')

      navigate('/');
    }
    else {
      console.log('добавление в хранилище')
      // добавляем в хранилище
    }


  }, [login, password, isRegForm]
  )
  // console.log('isRegForm', isRegForm)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{

      }}>
        <Grid >
          <Grid item >
            <Typography>
              Логин
            </Typography>
            <TextField {
              ...register('login', { required: true })}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <Typography>
              Пароль
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

export default Form;

