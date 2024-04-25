import React, { useState } from 'react';
import Select from 'react-select';
import { Box, Stack } from '@mui/material';
import {IconUser} from '@tabler/icons-react';

const options = [
  { value: 'US - Demo Account', label: 'US - Demo Account', icon: <IconUser size='16' /> },
  { value: 'US - Demo Account', label: 'US - Demo Account', icon: <IconUser /> },
  { value: 'US - Demo Account', label: 'US - Demo Account', icon: <IconUser /> },
  { value: 'US - Demo Account', label: 'US - Demo Account', icon: <IconUser />},
  { value: 'US - Demo Account', label: 'US - Demo Account', icon: <IconUser />},
];

const SelectWithSearchAndIcon = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const Option = ({ data }) => (
  <Box>
    <Stack direction='row' spacing={3}>
		<Box>{data.icon}</Box>
		<Box>{data.label}</Box>
	</Stack>
  </Box>
  );

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      placeholder="Select an option"
    />
  );
};

export default SelectWithSearchAndIcon;
