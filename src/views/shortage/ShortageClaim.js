import { Grid, Typography, Box, styled, Button, Avatar,  } from '@mui/material';
import React from 'react'
import DashboardCard from '../../components/shared/DashboardCard';
import Breadcrumb from '../components/pages/Breadcrumb';
import Header from '../components/pages/Header';
import YearlyTrend from '../components/pages/YearlyTrend';
import PageContainer from '../../components/container/PageContainer';
import ShortageTable from '../components/pages/ShortageTable';
import FinopsTable from '../components/pages/FinopsTable';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import {IconChevronRight,IconThumbUp, IconClock, IconBriefcase, IconCurrencyDollar, IconExclamationCircle, IconThumbDown } from '@tabler/icons-react';
import BarChart from '../components/pages/Barchart';
import moment from 'moment';

export const ExportCSVBTN = () => {

	return (
		<Button variant="contained" color="primary">Export CSV</Button>
	);
};
import CustomStepper from '../components/pages/CustomStepper';
import NumberData from '../components/pages/NumberData';

const ShortageClaim = () => {
	const theme = useTheme();
	const data = [
		{ body: "Hour Saved", number: "18 h", icon: "IconClock", avatarBackgroundColor: theme.palette.success.extrDark, numberColor: theme.palette.success.extrDark},
		{ body: "Resources Saved", number: "496", icon: "IconBriefcase", avatarBackgroundColor: theme.palette.accent.main, numberColor: theme.palette.success.extrDark },
		{ body: "Amount Saved", number: "$57,423", icon: "IconCurrencyDollar",avatarBackgroundColor: theme.palette.primary.light, numberColor: theme.palette.success.extrDark}
	  ];
	  
	  const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.contrast,
		border: '1px solid',
		borderColor: theme.palette.primary.contrast,
		color: theme.palette.primary.contrastText,
		fontSize: '10px',
		padding: '2px 6px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color:theme.palette.primary.contrastText,
			borderColor:theme.palette.primary.main
		},
	}));
	const TypographyPayment = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		marginBottom: '10px',
	}));
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));
	

	return (
		<PageContainer title="Shortage Claim">
			
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Shortage Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage Claim' />
				</Grid>

				<Grid item xs={12} my={1}>
					<Typography variant='h3'>Bulk Shortage Dispute - Historical</Typography>
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={3}>
							<DashboardCard 
								title={
								<Typography variant='h4' sx={{color: theme.palette.success.main}} >
									Shortage Claim Finding
								</Typography>}
							>
								<Grid container spacing={4}>
									<Grid item xs={12}>
										<Typography variant='h3' ><b>${new Intl.NumberFormat().format(4942234.43)} </b></Typography>
									</Grid>
									<Grid item xs={12}>
										<TypographyPayment variant='h6'>Payment Due Date:</TypographyPayment>
										<Grid container spacing={1}>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.accent.main, fontWeight: 600 }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.accent.main, fontWeight: 600 }}>To</Typography></Grid>
											<Grid item><Typography variant='body1' style={{ color: theme.palette.accent.main, fontWeight: 600 }}>13 Dec 2021</Typography></Grid>
										</Grid>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={4}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={2}>
						    <DashboardCard title={
								<Typography variant='h4'  sx={{color: theme.palette.accent.main}}>
									Current Stage
								</Typography>}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										<Typography variant="h3" sx={{color: theme.palette.secondary.main, textAlign:'center'}}marginBottom={1}>Stage: 4</Typography>
									
									</Grid>
									<Grid item xs={12}>
										<Box style={{ marginTop: '-30px',marginLeft:'-13px'}} ><BarChart color={theme.palette.secondary.main} percentage={37} chartWidth="150" chartHeight="130" chartLableFonrSize="16px"  /></Box>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
						   <DashboardCard>
								<NumberData data={data} />
						   </DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<ShortageTable />
						</Grid>
						<Grid item xs={12} lg={6}>
							<DashboardCard title={<Typography variant='h4'>Current Progress</Typography>}>
								<CustomStepper />
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
		     		<Grid container spacing={2}>
						<Grid item xs={12} my={2}>
							<Typography variant='h3'>Price Claim Dispute</Typography>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Disputed</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>$1,330,771.61</Typography>
									<IconExclamationCircle size='70' style={{position:'absolute', right:'25px', bottom:'60px', color: theme.palette.primary.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Pending With Amazon</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.warning.main }}>${new Intl.NumberFormat().format(538941)}</Typography>
									<Box style={{position:'absolute', right:'10px', bottom:'40px'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="130" chartHeight="120" chartLableFonrSize="16px"  /></Box>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Denied</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.error.main }}>${new Intl.NumberFormat().format(6894247)}</Typography>
									<IconThumbDown size='70' style={{position:'absolute', right:'25px', bottom:'60px', color: theme.palette.error.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard 
									title={
										<Typography variant='h6'>Total Approved</Typography>
									}
									action={
										<ButtonStyled component={Link} to="/shortage-log">View Details <IconChevronRight size="16" /></ButtonStyled>
									}
								>
									<Typography variant='h4' sx={{ color: theme.palette.success.dark }}>${new Intl.NumberFormat().format(4942234)}</Typography>
									<IconThumbUp size='70' style={{position:'absolute', right:'25px', bottom: '60px', color: theme.palette.success.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DashboardCard  title={<Typography variant='h4'>FinOps-Shortage Claim</Typography>}>
				    	<FinopsTable />
					</DashboardCard>
				</Grid>
			</Grid>
		</PageContainer>
	)
}

export default ShortageClaim;
