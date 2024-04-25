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

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? 'lightblue'
        : isFocused
        ? 'lightgray' 
        : undefined,
		border: isDisabled,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? 'white'
        : 'black', 
      cursor: isDisabled ? 'not-allowed' : 'default',

<<<<<<< HEAD
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? 'lightblue' : 'lightgray'),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot(<IconUser />) }), 
  placeholder: (styles) => ({ ...styles, ...dot(<IconUser />) }), 
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.icon) }),
=======
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      placeholder="Select an option"
    />
  );
>>>>>>> a60a5e2504978a8cebbd3ed2224dd0b3f6f6d03a
};

const CustomSelect = () => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}

  />
);

export default CustomSelect;
