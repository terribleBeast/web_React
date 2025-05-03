import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectLabCount, toLab } from '../features/labsSlice'
import { useNavigate } from 'react-router-dom'

function Menu() {

  const navigate = useNavigate()
  const labsName = []
  for (let number = 1; number <= useSelector(selectLabCount); number++) {
    labsName.push(`laboratory ${number}`);
    
  }
  const dispatch = useDispatch()

  return (
    <Box>
      <Typography variant='h5' style={{textAlign: 'center', margin: 5}}>Laboratories</Typography>
      <List>
        {labsName.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {dispatch(toLab(index)); navigate('/')}}>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Menu;