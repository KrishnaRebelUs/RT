import React, { useState } from 'react';
import { Box, styled, Button, Checkbox, MenuItem, Menu } from '@mui/material';

const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  fontSize: '13px',
  padding: '5px 12px',
  fontWeight: '600',
  textAlign: 'end',
  '&:hover': {
    backgroundColor: theme.palette.primary.extraLight,
    color: theme.palette.primary.main,
  },
}));

const Export = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (option) => {
    if (checkedOptions.includes(option)) {
      setCheckedOptions(checkedOptions.filter((item) => item !== option));
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  };

  return (
    <Box>
      <ButtonStyled
        onClick={handleClick}
        size="large"
        aria-label="select language"
        aria-controls="language-menu"
        aria-haspopup="true"
      >
        Export
      </ButtonStyled>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <Checkbox
            checked={checkedOptions.includes('option1')}
            onChange={() => handleCheckboxChange('option1')}
          />
          Current
        </MenuItem>
        <MenuItem>
          <Checkbox
            checked={checkedOptions.includes('option2')}
            onChange={() => handleCheckboxChange('option2')}
          />
          Archive
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Export;
