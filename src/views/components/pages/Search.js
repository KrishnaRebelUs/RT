import React from 'react';
import { Box, Autocomplete,TextField,Checkbox } from '@mui/material';


const account = [
    { text: 'Select All',},
    { text: 'MX - Chefman México S. d. R.L.'},
    { text: 'US - Panduit Corp. - Upstart' },
    { text: 'MX - Chefman México S. de R.L. de C.V.'},
    { text: 'US - Dude Products'},
    { text: 'CA - Nature’s Path Foods'},
    { text: 'CA - Iovate Health Sciences Incorporated CA'},
    { text: 'US - Polk Audio'},
    { text: 'US - Malin Goetz (Amazon)'},
    { text: 'US - Malin Goetz (Amazon)'}
  ];
const Search = () => {
  return (
	
	<Box>
		<Autocomplete
		multiple
		id="checkboxes-tags-demo"
		options={account}
		disableCloseOnSelect
		getOptionLabel={(option) => option.text}
		renderOption={(props, option, { selected }) => (
			<li {...props}>
			<Checkbox
				style={{ marginRight: 8 }}
				checked={selected}
			/>
			{option.text}
			</li>
		)}
		style={{ width: 500 }}
		renderInput={(params) => (
			<TextField {...params}  placeholder="Select Amzon Vendor Account" />
		)}
		/>
	</Box>
  )
}


export default Search;
