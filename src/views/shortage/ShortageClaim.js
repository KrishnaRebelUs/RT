import { Grid, Stack, Typography, Box, styled, Button } from '@mui/material';
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
import {IconChevronRight,IconThumbUp, IconExclamationCircle, IconThumbDown} from '@tabler/icons-react';
import BarChart from '../components/pages/BarChart';


const ShortageClaim = () => {
const theme = useTheme();
const BoxStyled = styled(Box)(({ theme }) => ({
	'& svg':{
		color:theme.palette.success.main,
		size:'100'
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
						<Grid item xs={12}>
							<Typography variant='h3'>Bulk Shortage Dispute - Historical</Typography>
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h4' >
								Shortage Claim Finding
							</Typography>}>
								<Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
									<Typography variant='h2' ><b>$ 98442,989,98.90</b></Typography>
								</Stack>
								<Stack direction='row' spacing={4} useFlexGap marginTop={3}>
									<Box>
										<Typography variant='h5'>Shortage claims audit:</Typography>
										<Typography variant='h6'>11-Jan-2018 to 13-Dec-2021</Typography>
									</Box>
								</Stack>
							</DashboardCard>
						</Grid>
						<Grid item xs={12} lg={4}>
							<YearlyTrend />
						</Grid>
						<Grid item xs={12} lg={4}>
							<DashboardCard title={<Typography variant='h4' > Total Line Audit </Typography>}>
								<Stack direction='row' spacing={2}>
									<Typography variant='h2'  sx={{color: theme.palette.accent.main}}>$ 98442,989,98.90</Typography>
								</Stack>
								<Stack direction='row' spacing={4} marginTop={3}>
									<Box>
										<Typography variant='h5'>Shortage claims audit:</Typography>
										<Typography variant='h6'>11-Jan-2018 to 13-Dec-2021</Typography>
									</Box>
								</Stack>
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
							<DashboardCard title={<Typography variant='h4' >Shortage Claim Finding </Typography>}>
							</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h3'>Itemized Shortage Claim Dispute - Ongoing</Typography>
						</Grid>
						<Grid item xs={12} lg={3}>
							<Box style={{ position: 'relative', height: '100%',  minHeight:'270px' }}>
								<DashboardCard title={<Typography variant='h4'>Total Disputed</Typography>}>
							    	<Grid container spacing={3}>
										<Grid item>
											<Typography variant='BigTitle' sx={{ color: theme.palette.secondary.main }}>$98442</Typography>
										</Grid>
										<Grid item>
									    	<Box sx={{color:theme.palette.secondary.main}}>
											     <IconExclamationCircle size='100' style={{position:'absolute', right:'30px', bottom:'30px'}}/>
											</Box>
										</Grid>
									</Grid>
								</DashboardCard>
							</Box>
						</Grid>
						<Grid item xs={12} lg={3}>
							<Box style={{ position: 'relative', height: '100%',  minHeight:'270px' }}>
								<DashboardCard title={<Typography variant='h4'>Total Pending With Amazon</Typography>}>
								    <Grid container spacing={3}>
										<Grid item>
											<Typography variant='BigTitle' sx={{ color: theme.palette.accent.main }}>$98442</Typography>
										</Grid>
										<Grid item>
											<Box style={{position:'absolute', right:'10px', bottom:'0'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="150" chartHeight="150" chartLableFonrSize="16px"  /></Box>
										</Grid>
									</Grid>
								</DashboardCard>
							</Box>
						</Grid>
						<Grid item xs={12} lg={3}>
							<Box style={{ position: 'relative', height: '100%' , minHeight:'270px'}}>
								<DashboardCard title={<Typography variant='h4'>Total Approved</Typography>}>
								    <Grid container spacing={3}>
										<Grid item>
											<Typography variant='BigTitle' sx={{ color: theme.palette.error.main }}>$98442</Typography>
										</Grid>
										<Grid item>
											<Box  sx={{color:theme.palette.error.main}}>
											     <IconThumbDown size='100' style={{position:'absolute', right:'30px', bottom:'30px'}}/>
											</Box>
										</Grid>
									</Grid>
								</DashboardCard>
							</Box>
						</Grid>
						<Grid item xs={12} lg={3}>
							<Box style={{ position: 'relative', height: '100%' }}>
								<DashboardCard title={<Typography variant='h4'>Total Approved</Typography>} action={
								<ButtonStyled component={Link} to="/shortage-log">View Details <IconChevronRight size="16" /></ButtonStyled>}>
								<Grid container spacing={3}>
										<Grid item>
											<Typography variant='BigTitle' sx={{ color: theme.palette.primary.main }}>$98442</Typography>
										</Grid>
										<Grid item>
											<BoxStyled>
											     <IconThumbUp size='100' style={{position:'absolute', right:'30px', bottom:'30px'}}/>
											</BoxStyled>
										</Grid>
									</Grid>
								</DashboardCard>
							</Box>
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
