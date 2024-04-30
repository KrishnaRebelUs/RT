import { useTheme } from '@emotion/react';
import { Typography, Grid, styled,Box,List, ListItem} from '@mui/material'
import { fontWeight } from '@mui/system';
import React from 'react'

const TypographyStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	borderBottom: '1px solid',
	borderColor: '#ccc', 
	paddingBottom: '10px'
}));
const BoxStyled = styled(Box)(({ theme }) => ({
	border: '1px solid',
	borderColor: theme.palette.primary.main,
	borderRadius: '7px',
	padding: '10px 20px',
  }));

  const ListStyled = styled(ListItem)(({ theme }) => ({
	borderBottom: '2px solid',
	borderColor: '#ccc', 
	padding:'5px 0',
	color: theme.palette.primary.main,
	fontWeight: '600'
  }));

  
  

const Update = () => {
	const theme = useTheme();
  return (
	<BoxStyled className='actual-updates'>
	    <TypographyStyled variant='h5' sx={{color: theme.palette.accent.main}}>Upadtes</TypographyStyled>
	    <marquee direction='up' loop='' height='420px' style={{overlow:'hidden'}}>
		  <List>
				  <ListStyled>Successfully recovered in Batch 1 $ 20,000</ListStyled>
				  <ListStyled>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListStyled>
				  <ListStyled>Successfully recovered in Batch 1 $ 20,000</ListStyled>
				  <ListStyled>Awaiting to hear from Amazon on Batch 2</ListStyled>
				  <ListStyled>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListStyled>
				  <ListStyled>Successfully recovered in Batch 1 $ 20,000</ListStyled>
				  <ListStyled>Awaiting to hear from Amazon on Batch 2</ListStyled>
				  <ListStyled>Amazon hosts over 100 categories of overbillings, chargebacks, and deductions</ListStyled>
		  </List>
	    </marquee>
   </BoxStyled>
  )
}

export default Update
