import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import ButtonTheme from './ButtonTheme';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ButtonLog from './ButtonLog';
import { useSelector } from 'react-redux';
import { selectUserIsLogIn } from '../features/user/userSlice';
import TemporaryDrawer from './LeftDrawer'
import AdminButton from './AdminButton';

function ButtonAppBar() {

  const isLogIn = useSelector(selectUserIsLogIn)

  return (
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </TemporaryDrawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Laboratories
        </Typography>

        <AdminButton/>
        <ButtonTheme />
        <Button color="inherit" component={Link} to="/" style={{ textDecoration: 'none' }} >Home</Button>

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
          : null}
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;

