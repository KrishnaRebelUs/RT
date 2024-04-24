import { Grid, Typography, Box, styled, Button, Divider, Avatar } from '@mui/material';
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


const ShortageClaim = () => {
	const theme = useTheme();
	const BoxStyled = styled(Box)(({ theme }) => ({
	   '& svg':{
		  color:theme.palette.success.main,
		  width: '50px',
		}
	}));
	const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		border: '1px solid',
		borderColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		fontSize: '13px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: 'white',
		  },
	}));
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	}));
	const TypographyPayment = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		marginBottom: '10px',
	}));
	const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
		marginBottom: '15px',
	}));
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));
	const AvatarStyled = styled(Avatar)(({ theme }) => ({
		backgroundColor: theme.palette.primary.extraLight,
		borderRadius: '7px',
		width: '40px',
		height: '40px',
	   '& svg':{
		  color:theme.palette.primary.main,
		  width: '26px',
		  height: '26px'
		}
	
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

				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} my={1}>
							<Typography variant='h3'>Bulk Shortage Dispute - Historical</Typography>
						</Grid>
						<Grid item xs={12} mb={1}>
							<Grid container direction="row" spacing={3}>
								<Grid item xs>
									<DashboardCard>
										<Grid container spacing={3} alignItems="center">
											<Grid item sm={8}>
												<Grid container sx={{ flexWrap: 'nowrap' }} spacing={2} alignItems="center">
													<Grid item><AvatarStyled><IconClock/></AvatarStyled></Grid>
													<Grid item><Typography variant='h5'>Hour Saved</Typography></Grid>
												</Grid>
											</Grid>
											<Grid item sm={4}>
												<Typography variant='h4' style={{ color: theme.palette.primary.main, textAlign:'right' }}>18 h</Typography>
											</Grid>
										</Grid>
									</DashboardCard>
								</Grid>
								<Grid item xs>
									<DashboardCard>
										<Grid container spacing={3} alignItems="center">
											<Grid item sm={8}>
												<Grid container spacing={2} sx={{ flexWrap: 'nowrap' }} alignItems="center">
													<Grid item><AvatarStyled style={{ backgroundColor: theme.palette.accent.light }}><IconBriefcase style={{ color: theme.palette.accent.main }}/></AvatarStyled></Grid>
													<Grid item><Typography variant='h5'>Resources Saved</Typography></Grid>
												</Grid>
											</Grid>
											<Grid item sm={4}>
												<Typography variant='h4' style={{ color: theme.palette.accent.main, textAlign:'right' }}>496</Typography>
											</Grid>
										</Grid>
									</DashboardCard>
								</Grid>
								<Grid item xs>
									<DashboardCard>
										<Grid container spacing={3} alignItems="center">
											<Grid item sm={8}>
												<Grid container spacing={2} sx={{ flexWrap: 'nowrap' }} alignItems="center">
													<Grid item><AvatarStyled style={{ backgroundColor: theme.palette.success.light }}><IconCurrencyDollar style={{ color: theme.palette.success.main }}/></AvatarStyled></Grid>
													<Grid item><Typography variant='h5'>Amount Saved</Typography></Grid>
												</Grid>
											</Grid>
											<Grid item sm={4}>
												<Typography variant='h4' style={{ color: theme.palette.success.main, textAlign:'right' }}>$58954</Typography>
											</Grid>
										</Grid>
									</DashboardCard>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard 
								title={
								<Typography variant='h5' >
									Shortage Claim Finding
								</Typography>}
							>
								<Grid container spacing={4}>
									<Grid item xs={12}>
										<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
									</Grid>
									<Grid item xs={12}>
										<TypographyPayment variant='h6'>Payment Due Date:</TypographyPayment>
										<Box mb={2}><Divider /></Box>
										<Grid container spacing={3}>
											<Grid item><Typography variant='h6' style={{ color: theme.palette.accent.main }}>11 Jan 2018</Typography></Grid>
											<Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
											<Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
										</Grid>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={4}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h5' >Total Line Audit</Typography>}>
								<Grid container spacing={4}>
									<Grid item xs={12}>
										<TypographyStyled variant='h2' ><b>562864</b></TypographyStyled>
									</Grid>
									<Grid item xs={12}>
										<TypographyPayment variant='h6'>Shortage claims audit:</TypographyPayment>
										<Box mb={2}><Divider /></Box>
										<Typography variant='h2' style={{ color: theme.palette.accent.main }}>$52648</Typography>
									</Grid>
								</Grid>
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={8}>
							<ShortageTable />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h4' >Shortage Claim Reconciliation </Typography>}></DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} my={2}>
							<Typography variant='h3'>Itemized Shortage Claim Dispute - Ongoing</Typography>
						</Grid>
						<Grid item xs={12} lg={6} xl={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h5'>Total Disputed</Typography>}>
									<Typography variant='h3' sx={{ color: theme.palette.primary.main }}>$1,330,771.61</Typography>
									<IconExclamationCircle size='70' style={{position:'absolute', right:'30px', bottom:'30px', color: theme.palette.primary.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item xs={12} lg={6} xl={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h5'>Total Pending With Amazon</Typography>}>
									<Typography variant='h3' sx={{ color: theme.palette.warning.main }}>$439,573.41</Typography>
									<Box style={{position:'absolute', right:'10px', bottom:'10px'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="130" chartHeight="130" chartLableFonrSize="16px"  /></Box>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item xs={12} lg={6} xl={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h5'>Total Denied</Typography>}>
									<Typography variant='h3' sx={{ color: theme.palette.error.main }}>$535,758.19</Typography>
									<IconThumbDown size='70' style={{position:'absolute', right:'30px', bottom:'30px', color: theme.palette.error.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item xs={12} lg={6} xl={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h5'>Total Approved</Typography>}>
									<Typography variant='h3' sx={{ color: theme.palette.success.dark }}>$4,942,234.43</Typography>
									<Box mt={3}><ButtonStyled component={Link} to="/shortage-log">View Details <IconChevronRight size="16" /></ButtonStyled></Box>
									<IconThumbUp size='70' style={{position:'absolute', right:'30px', bottom:'30px', color: theme.palette.success.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
						<FinopsTable />
				</Grid>

			</Grid>
		</PageContainer>
	)
}

export default ShortageClaim;
