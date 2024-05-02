import React, { useState } from 'react';
import { IconUser } from '@tabler/icons-react';
import '../../../theme/FormStyle.css';
import { Box, Select, Checkbox, Input, MenuItem, ListItemText ,ListItemIcon} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  variant: "menu"
};
const options = [
  'Us Demo Account 1',
  'Us Demo Account 2',
  'Us Demo Account 3',
];

const SelectSearch = () => {
  const [selected, setSelected] = useState([options[0]]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  return (
    <Box className="accountStyle">
      <Box className="accountStyle_icon"><IconUser /></Box>
      <Box>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          className="select-search"
          input={<Input label="Tag" placeholder='Select Account' />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         <MenuItem
          value="all"
        >
          <ListItemIcon>
            <Checkbox
              checked={isAllSelected}
            />
          </ListItemIcon>
          <ListItemText

            primary="Select All"
          />
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
        </Select>
      </Box>
    </Box>
  );
};

export default SelectSearch;
