import { selectTheme, toDark, toLight } from '../features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Иконка темной темы
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Иконка светлой темы
import { IconButton } from '@mui/material';

const ButtonTheme = () => {
  const themeMode = useSelector(selectTheme)
  const dispatch = useDispatch()
 

  const handleClick = () => {
    if (themeMode === 'light') {
      dispatch(toDark());
    }
    else {
      dispatch(toLight());
    }
  }
  
  return (

    <IconButton onClick={handleClick} color="inherit">
      {themeMode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

export default ButtonTheme;
