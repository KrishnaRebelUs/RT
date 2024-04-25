import React from 'react';
import Select from 'react-select';
import { IconUser } from '@tabler/icons-react';
import '../../../theme/FormStyle.css';
import { Box, styled } from '@mui/material';
const colourOptions = [
  { value: 'account1', label: 'Us Demo Account 1'}, 
  { value: 'account2', label: 'Us Demo Account 2'},
  { value: 'account3', label: 'Us Demo Account 3'},
];

const CustomSelect = () => (
  <Select
      defaultValue={colourOptions[0]}
      options={colourOptions}
    />
  // <Box className="accountStyle">
  //   <Box className="accountStyle_icon"><IconUser /></Box>
    
  // </Box>
);

export default CustomSelect;
