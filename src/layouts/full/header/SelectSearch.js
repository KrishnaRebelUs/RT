import React from 'react';
import Select from 'react-select';
import { IconUser } from '@tabler/icons-react';
import '../../../theme/FormStyle.css';

const colourOptions = [
  { value: 'account1', label: 'Us Demo Account 1', icon: <IconUser /> }, 
  { value: 'account2', label: 'Us Demo Account 2', icon: <IconUser />  },
  { value: 'account3', label: 'Us Demo Account 3', icon: <IconUser /> },
];

const dot = (icon) => ({
  alignItems: 'center',
  display: 'flex',

});



const CustomSelect = () => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}

  />
);

export default CustomSelect;
