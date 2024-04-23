import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from './Profile';
import { IconBellRinging, IconMenu2 ,IconMail} from '@tabler/icons-react';

const Header = (props) => {

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="info"
          aria-label="menu"
          onClick={props.toggleMobileSidebar} 
          sx={{
            display: {
            },
          }}
        >
          <IconMenu2 width="20" height="20" />
        </IconButton>


       
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="secondary">
            <IconMail size="21" stroke="1.5" />
          </Badge>

         </IconButton>
          <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>

         </IconButton>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleMobileSidebar: PropTypes.func.isRequired, 
};

export default Header;
