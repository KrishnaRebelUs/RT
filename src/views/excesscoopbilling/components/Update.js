import { useTheme } from '@emotion/react';
import { Typography, Grid, styled } from '@mui/material'
import React from 'react'
import DashboardCard from '../../../components/shared/DashboardCard';

const TypographyStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.dark
}));
const TypographyParaStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	position: 'relative',
	marginBottom: '5px',
	'&::before': {
	  content: '""',
	  position: 'absolute',
	  display: 'inline-block',
	  width: '12px',
	  height: '12px',
	  borderRadius: '50%',
	  backgroundColor: theme.palette.accent.main,
	  marginRight: '8px',
	  bottom: '7px',
	  left: '-25px', 
	},
  }));
  const GridStyled = styled(Grid)(({ theme }) => ({
	marginLeft:'26px',
    marginTop: '10px'

}));
  
  

const Update = () => {
	const theme = useTheme();
  return (
	<DashboardCard title={<TypographyStyled variant='h5'>Updates</TypographyStyled>}>
         <Grid container spacing={2}  alignItems='center'>
<<<<<<< HEAD
           <marquee direction='down' scrollamount="2" style={{marginLeft: '17px'}}>
=======
           <marquee scrollAmount="1" direction='up' speed="100" style={{marginLeft: '17px'}}>
>>>>>>> a60a5e2504978a8cebbd3ed2224dd0b3f6f6d03a
			    <GridStyled item xs="12">
					<TypographyParaStyled variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				<GridStyled item xs="12">
					<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				<GridStyled item xs="12">
					<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				<GridStyled item xs="12" >
					<TypographyParaStyled variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				<GridStyled item xs="12">
					<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				<GridStyled item xs="12">
					<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
					<Typography variant='body2'>3 May</Typography>
				</GridStyled>
				
		   </marquee>
		 </Grid>
	
	</DashboardCard>
  )
}

export default Update
