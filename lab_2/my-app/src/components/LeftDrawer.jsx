import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menu from './Menu';

export default function TemporaryDrawer({ children }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{children}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Menu />
        </Box>
      </Drawer>
    </div>
  );
}
