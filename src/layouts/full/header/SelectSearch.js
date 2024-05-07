import React from 'react';
import { IconUser } from '@tabler/icons-react';
import '../../../theme/FormStyle.css';
import { Box, Select, Checkbox, FormControl, Input, MenuItem, ListItemText } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Us Demo Account 1',
  'Us Demo Account 2',
  'Us Demo Account 3',
];

const SelectSearch = () => {
  const [personName, setPersonName] = React.useState([names[0]]); // Initialize with first item

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box className="accountStyle">
      <Box className="accountStyle_icon"><IconUser /></Box>
      <Box>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={personName}
          onChange={handleChange}
          className="select-search"
          input={<Input label="Tag" placeholder='Select Account' />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  )
}

export default SelectSearch;
