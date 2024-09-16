import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import ReusableModal from './components/UI/ReusableModal';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <ReusableModal open={open} onClose={handleClose}>
   
      </ReusableModal>
    </div>
  );
};

export default App;
