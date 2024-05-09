import React, { useState } from 'react';
import { styled, MenuItem, Box, Avatar, Menu, ListItemText, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import eng from '../../../assets/images/Flag/eng.svg';
import french from '../../../assets/images/Flag/france.svg';
import germany from '../../../assets/images/Flag/german.svg';
import spain from '../../../assets/images/Flag/spain.svg';
import italy from '../../../assets/images/Flag/italy.svg';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
}));

const Flag = () => {
  const [anchorEl, setAnchorEl] = useState(null); 
  const [language, setLanguage] = useState('English'); 
  const [selectedAvatar, setSelectedAvatar] = useState(eng); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    handleClose();
    // Update the image source based on the selected language
    switch(selectedLanguage) {
      case 'English':
        setSelectedAvatar(eng);
        break;
      case 'French':
        setSelectedAvatar(french);
        break;
      case 'Spain':
        setSelectedAvatar(spain);
        break;
      case 'Germany':
        setSelectedAvatar(germany);
        break;
      default:
        setSelectedAvatar(eng);
    }
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="select language"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AvatarStyled src={selectedAvatar} alt="Language" />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: '7px' } }} 
      >
        <MenuItem onClick={() => handleLanguageSelect('English')}>
          <ListItemIcon>
            <AvatarStyled src={eng} alt="English" />
          </ListItemIcon>
          <ListItemText primary="English" />
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('French')}>
          <ListItemIcon>
            <AvatarStyled src={french} alt="French" />
          </ListItemIcon>
          <ListItemText primary="French" />
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('Spain')}>
          <ListItemIcon>
            <AvatarStyled src={spain} alt="Spain" />
          </ListItemIcon>
          <ListItemText primary="Spanish" />
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('Germany')}>
          <ListItemIcon>
            <AvatarStyled src={germany} alt="Germany" />
          </ListItemIcon>
          <ListItemText primary="Germany" />
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('Italian')}>
          <ListItemIcon>
            <AvatarStyled src={italy} alt="Italian" />
          </ListItemIcon>
          <ListItemText primary="Italian" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Flag;
