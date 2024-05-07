import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  TextField,
} from '@mui/material';
import '../../../theme/Avatar.css';

import { IconSettings, IconBriefcase, IconUser, } from '@tabler/icons-react';

import ProfileImg1 from 'src/assets/images/profile/user-1.jpg';
import ProfileImg2 from 'src/assets/images/profile/user-1.jpg';
import ProfileImg3 from 'src/assets/images/profile/user-1.jpg';

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(ProfileImg1);
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarMenuOpen = () => {
    setAvatarMenuOpen(true);
    setAnchorEl(null); 
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuOpen(false);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setAvatarMenuOpen(false);
  };

  const handleOpenUploadDialog = () => {
    setOpenUploadDialog(true);
    setAnchorEl(null);
  };

  const handleCloseUploadDialog = () => {
    setOpenUploadDialog(false);
  };

  const handleCustomAvatarSubmit = (avatarUrl) => {
    if (avatarUrl.trim() !== '') {
      setSelectedAvatar(avatarUrl);
      setOpenUploadDialog(false);
    }
  };

  const avatarList = [
    { src: ProfileImg1},
    { src: ProfileImg2},
    { src: ProfileImg3}
  ];

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
          src={selectedAvatar}
          alt="Selected Avatar"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAvatarMenuOpen}>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>Choose Avatar</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconBriefcase width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconSettings width={20} />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem>
          <Button to="/auth/login" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button>
        </MenuItem>
      </Menu>

      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={avatarMenuOpen}
        onClose={handleAvatarMenuClose}
        className='avatar-popup'
       
      >
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Choose Avatar</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {avatarList.map((avatar, index) => (
              <Grid item xs={4} key={index}>
                <Avatar
                  src={avatar.src}
                  alt={avatar.alt}
                  sx={{ width: 64, height: 64, cursor: 'pointer' }}
                  onClick={() => handleAvatarSelect(avatar.src)}
                />
                <Typography variant="body2" align="center" mt={1}>
                  {avatar.alt}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </Menu>

      <Dialog open={openUploadDialog} onClose={handleCloseUploadDialog}>
        <DialogTitle>Upload Custom Avatar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="custom-avatar"
            label="Avatar URL"
            type="url"
            fullWidth
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleCustomAvatarSubmit(event.target.value);
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUploadDialog}>Cancel</Button>
          <Button onClick={() => handleCustomAvatarSubmit(document.getElementById('custom-avatar').value)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
