import { Grid, Stack, Typography ,Box, styled} from '@mui/material';
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
      <PageContainer  title="Shortage Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Shortage Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header  title='Shortage' />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
						  <TypographyTitle variant='h3'>Bulk Shortage Dispute - Historical</TypographyTitle>
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={  <Typography variant='h4' >
											Shortage Claim Finding
										</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment  variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={4}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={4}>
						<DashboardCard title={  <Typography variant='h4' > Total Line Audit </Typography>}>
						    <Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
								<TypographyStyled variant='h3' ><b>$ 98442,989,98.90</b></TypographyStyled>
							</Stack>
							<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
								<Box>
									<TypographyPayment  variant='h5'>Shortage claims audit:</TypographyPayment>
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
							<DashboardCard title={  <Typography variant='h4' >
											Shortage Claim Finding
										</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment  variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={6}>
							<DashboardCard title={  <Typography variant='h4' >
											Shortage Claim Finding
										</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<TypographyStyled variant='h2' ><b>$ 98442,989,98.90</b></TypographyStyled>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<TypographyPayment  variant='h5'>Shortage claims audit:</TypographyPayment>
										<TypographyDate variant='h6'>11-Jan-2018 to 13-Dec-2021</TypographyDate>
									</Box>
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
