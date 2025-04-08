import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from "react"
// import './../App.css'




const Form = () => {
  const [isReg, setStateLog] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm()

  const { login, password } = watch();

  const onSubmit = useCallback((data) => {
    
    console.log(data, isReg)
    if (!isReg & data.login === 'admin' & data.password === '1234') {
      localStorage.setItem('isLogIn', 'true')
      localStorage.setItem('login', data.login)
      navigate('/');
    }
    else {
      console.log('добавление в хранилище')
      // добавляем в хранилище
    }


  }, [login, password]
  )

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
            <input type="submit" value={isReg ? 'Зарегистрироваться' : 'Войти'}></input>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>

      </form>
      <Button onClick={() => setStateLog(isReg ? false : true)}> {isReg ? 'Уже зарегистрированы?' : 'Нет аккаунта?' } </Button>
    </div>
  )
}

export default Form;

