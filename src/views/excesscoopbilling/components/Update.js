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
	marginBottom: '10px',
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
	  left: '-27px', 
	},
  }));
  
  

const Update = () => {
	const theme = useTheme();
  return (
	<DashboardCard title={<TypographyStyled variant='h5'>Updates</TypographyStyled>}>
         <Grid container spacing={2} mb={2}>
            <Grid item xs="4" >
				<Typography variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</Typography>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
			<Grid item xs="4">
	    		<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
			<Grid item xs="4">
		    	<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
		 </Grid>
		 <Grid container spacing={2}>
            <Grid item xs="4" >
				<Typography variant='h6' style={{color: theme.palette.primary.main}}>Successfully recovered in Batch 1 $ 20,000</Typography>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
			<Grid item xs="4">
	    		<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
			<Grid item xs="4">
		    	<TypographyParaStyled variant='h6'>Successfully recovered in Batch 1 $ 20,000</TypographyParaStyled>
				<Typography variant='body2'>3 May</Typography>
			</Grid>
		 </Grid>
	</DashboardCard>
  )
}

export default Update
