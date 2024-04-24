import { Grid, Stack, Typography, Box, styled, Paper } from '@mui/material';
import React from 'react'
import DashboardCard from '../../components/shared/DashboardCard';
import Breadcrumb from '../components/pages/Breadcrumb';
import Header from '../components/pages/Header';
import YearlyTrend from '../components/pages/YearlyTrend';
import PageContainer from '../../components/container/PageContainer';

const ShortageClaim = () => {
	const TypographyStyled = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
	}));
	const TypographyPayment = styled(Typography)(({ theme }) => ({
		color: theme.palette.secondary.main,
		marginBottom: '10px',
	}));
	const TypographyDate = styled(Typography)(({ theme }) => ({
		color: theme.palette.accent.main,
	}));
	const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
		marginBottom: '15px',
	}));
	return (
		<PageContainer title="Shortage Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Shortage Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage' />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TypographyTitle variant='h3'>Bulk Shortage Dispute - Historical</TypographyTitle>
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h4' >
								Shortage Claim Finding
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={4}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h4' > Total Line Audit </Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h3' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TypographyTitle variant='h3'>Shortage Claim Reconcilation</TypographyTitle>
						</Grid>
						<Grid item xs={12} lg={6}>
							<DashboardCard title={<Typography variant='h4' >
								Shortage Claim Finding
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={6}>
							<DashboardCard title={<Typography variant='h4' >
								Shortage Claim Finding
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>

					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TypographyTitle variant='h3'>Itemized Shortage Claim Dispute - Ongoing</TypographyTitle>
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard title={<Typography variant='h4' >
								Total Dispute
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 929,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='left' spacing={4} useFlexGap marginTop={3}>
									<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-octagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard title={<Typography variant='h4' >
								Total Pending With Amazon
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 433,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='left' spacing={4} useFlexGap marginTop={3}>
									<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-octagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard title={<Typography variant='h4' >
								Total Denied
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 535,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='left' spacing={4} useFlexGap marginTop={3}>
								<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#d11f1f"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={3}>
							<DashboardCard title={<Typography variant='h4' >
								Total Approved
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 111,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='left' spacing={4} useFlexGap marginTop={3}>
								<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
								</Stack>
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>

			</Grid>
		</PageContainer>
	)
}

export default ShortageClaim;
