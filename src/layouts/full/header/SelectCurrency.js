import React from 'react';
import Select from 'react-select';
import { IconUser } from '@tabler/icons-react';
import '../../../theme/FormStyle.css';

const Currency = [
  { value: 'account1', label: 'USD', icon: <IconUser /> }, 
  { value: 'account2', label: 'USD', icon: <IconUser /> },
  { value: 'account3', label: 'USD', icon: <IconUser /> },
];

const SelectCurrency = () => (
  <Select
    defaultValue={Currency[0]}
    options={Currency}
  />
);

export default SelectCurrency; 
