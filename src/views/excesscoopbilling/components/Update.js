import { keyframes, useTheme } from '@emotion/react';
import { Typography, Grid, styled,Box,List, ListItem} from '@mui/material';
import React from 'react';
import '../../../theme/Marquee.css';

const TypographyStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	borderBottom: '1px solid',
	borderColor: '#ddd', 
	paddingBottom: '10px'
}));
const BoxStyled = styled(Box)(({ theme }) => ({
	border: '1px solid',
	borderColor: theme.palette.primary.light,
	borderRadius: '7px',
	padding: '10px 20px'
}));

const Update = () => {
	const theme = useTheme();
  return (
	<BoxStyled>
	    <TypographyStyled variant='h5' sx={{color: theme.palette.accent.main}}>Updates</TypographyStyled>
		<Box className="marquee" height="270px">
			<List>
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Awaiting to hear from Amazon on Batch 2</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Awaiting to hear from Amazon on Batch 2</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
			</List>
			<List aria-hidden="true">
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Awaiting to hear from Amazon on Batch 2</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
				<ListItem>Successfully recovered in Batch 1 $ 20,000</ListItem>
				<ListItem>Awaiting to hear from Amazon on Batch 2</ListItem>
				<ListItem>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListItem>
			</List>
		</Box>
   </BoxStyled>
  )
}

export default Update
