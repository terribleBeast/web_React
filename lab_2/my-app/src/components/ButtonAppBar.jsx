import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
import { Link } from 'react-router-dom'; // Если используете роутинг
import MenuIcon from '@mui/icons-material/Menu';
import ButtonTheme from './ButtonTheme';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ButtonLog from './ButtonLog';
import { useSelector } from 'react-redux';
import { selectUserIsLogIn } from '../features/user/userSlice';

function MainMenu() {

  const isLogIn = useSelector(selectUserIsLogIn)

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon /> {/* Можно использовать для открытия Drawer на мобильных */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Laboratories
        </Typography>

        <ButtonTheme />
        <Button color="inherit" component={Link} to="/" style={{ textDecoration: 'none' }}>Home</Button>

        <ButtonLog />
        {isLogIn ?
          <IconButton
            size="small"
            color="inherit" 
            component={Link} // при добавлении изменился цвет на черный
            to='user'
          >
            <PermIdentityIcon />
          </IconButton>
          : <></>}
      </Toolbar>
    </AppBar>
  );
}

export default MainMenu;

