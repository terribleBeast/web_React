import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function AdminButton() {

    console.log("rendering Admin Button")
    const [anchorEl, setAnchorEl] = useState(null); // Состояние для элемента якоря (кнопки)
    const open = Boolean(anchorEl); // Состояние для открытия/закрытия меню

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // При клике устанавливаем элемент якоря
    };

    const handleClose = () => {
        setAnchorEl(null); // При закрытии сбрасываем элемент якоря
    };

    const navigate = useNavigate()
    // Убираем prefixURL, потому что теперь используем абсолютные пути
    // const prefixURL = '/admin'

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={
                    {
                        color: 'black'
                    }
                }
            >
                admin
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl} // Передаем элемент якоря
                open={open} // Указываем, открыто ли меню
                onClose={handleClose} // Обработчик закрытия
            >
                <MenuItem onClick={() => {navigate('/admin/users-table')}} >Users table</MenuItem>
                <MenuItem onClick={() => {navigate('/admin/feedbacks')}}>Feedbacks</MenuItem>
            </Menu>
        </div>
    );
}

export default AdminButton;