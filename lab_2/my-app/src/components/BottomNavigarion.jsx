import React from 'react';
import {
    BottomNavigation, BottomNavigationAction,
    useMediaQuery
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsLogIn } from '../features/user/userSlice';

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Обеспечивает отображение поверх других элементов
    backgroundColor: theme.palette.background.paper, // Цвет фона
    boxShadow: theme.shadows[5], // Добавляет тень
}));

const BottomMenu = () => {
    const isLogIn = useSelector(selectUserIsLogIn)
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // "sm" обычно соответствует breakpoint для мобильных устройств

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // if (!isMobile) {
    //     return null; // Не отображаем на ПК
    // }

    return (
        <StyledBottomNavigation
            value={value}
            onChange={handleChange}
            showLabels // Показывать текст под иконками
        >
            <BottomNavigationAction label="About us" icon={<InfoIcon />} LinkComponent={Link} to={'about'}/>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} LinkComponent={Link} to={'/'}/>
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} LinkComponent={Link} to={'user'} disabled={!isLogIn} />
        </StyledBottomNavigation>
    );
};

export default BottomMenu;