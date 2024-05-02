import React,{useState} from "react";
import { Box, styled, Typography,Grid,Stack,FormControlLabel ,Switch,FormGroup} from "@mui/material";
import { useTheme } from "@emotion/react";
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconArrowUpRight} from '@tabler/icons-react';
import ColumnChart from "../components/pages/ColumnChart";
import LineChart from "../components/pages/LineChart";



const FinancialScorecard = () => {

	const theme = useTheme();
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));
	const BoxStylegreen = styled(Box)(({ theme }) => ({
	   height: '10px',
	   width: '10px',
	   borderRadius: '50px',
	   backgroundColor: theme.palette.success. extraDark,
	   marginRight: '5px',
	   display:'inline-flex'
	}));
	const BoxStyleblue = styled(Box)(({ theme }) => ({
		height: '10px',
		width: '10px',
		borderRadius: '50px',
		backgroundColor: theme.palette.primary.main,
		marginRight: '5px',
		display:'inline-flex'
	 }));
	const TypographyStyled = styled(Typography)(({ theme }) => ({
	fontSize:'13px',
	fontWeight: '600'
	}));
	const MaterialUISwitch = styled(Switch)(({ theme }) => ({
		width: 62,
		height: 34,
		padding: 7,
		'& .MuiSwitch-switchBase': {
		  margin: 1,
		  padding: 0,
		  transform: 'translateX(6px)',
		  '&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage:`url(data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>)`,
			},
			'& + .MuiSwitch-track': {
			  opacity: 1,
			  backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
			},
		  },
		},
		'& .MuiSwitch-thumb': {
		  backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
		  width: 32,
		  height: 32,
		  '&::before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>')`,
		  },
		},
		'& .MuiSwitch-track': {
		  opacity: 1,
		  backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
		  borderRadius: 20 / 2,
		},
	  }));
	  

    return (
        <PageContainer title="Financial Scorecard">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Financial Scorecard']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Financial Scorecard' />
				</Grid>
				<Grid item xs ={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} my={2}>
							<Typography variant='h3'>Overview</Typography>
						</Grid>
						<Grid item sm={6} md={4}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6' sx={{ color: theme.palette.success.main }}>2.14% <IconArrowUpRight size='16' /></Typography>}>
									<Typography variant='h4'>EBITDA % (YTD)</Typography>
									 <Stack direction='row' spacing={1} marginTop={2}>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStylegreen />Total User</TypographyStyled>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStyleblue />Total Product</TypographyStyled>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }}><BoxStylegreen />Total Categories</TypographyStyled>
									 </Stack>
								    <ColumnChart />
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={4}>
							<ClaimCard>
							     <DashboardCard title={<Typography variant='h6' sx={{ color: theme.palette.success.main }}>$250,234 <IconArrowUpRight size='16' /></Typography>}>
									<Typography variant='h4'>EBITDA ($) YTD</Typography>
									<Stack direction='row' spacing={2} marginTop={2}>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStylegreen /> Past</TypographyStyled>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStyleblue />Latest</TypographyStyled>
									 </Stack>
								    <LineChart />
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={4}>
						    <ClaimCard>
								<DashboardCard title={<Typography variant='h6' sx={{ color: theme.palette.success.main }}>$2,360,412 <IconArrowUpRight size='16' /></Typography>}>
									<Typography variant='h4'>Provision Deduction YTD</Typography>
								    <ColumnChart />
								</DashboardCard>
							</ClaimCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs ={12}>
					<DashboardCard >
						<Grid container spacing={2}>
                         <Grid item xs={12}>
							<Stack direction='row' spacing={2}>
                                <Typography variant="h3">Yearly Comparison</Typography>
								<FormGroup>
								<FormControlLabel
									control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
								/>
								</FormGroup>
							</Stack>
						 </Grid>
						</Grid>
					</DashboardCard>
				</Grid>
            </Grid>
        </PageContainer>
    )
}

export default FinancialScorecard;