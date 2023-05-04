import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './modal.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:'8px'
};

export default function BasicModal({query, setQuery}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


//   console.log(data.filter(user=>user.name.toLowerCase().includes("fe")));
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <SearchIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <input className='input' type="text" placeholder='searching..' onChange={(e)=>(setQuery(e.target.value))}/>
        </Box>
      </Modal>
    </div>
  );
}