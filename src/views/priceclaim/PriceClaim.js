import React from "react";
import { Box, styled, Typography, Avatar, Grid, Button,Divider} from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconH1 } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconChevronRight,IconThumbUp, IconExclamationCircle, IconThumbDown, IconClock } from '@tabler/icons-react';
import BarChart from '../components/pages/Barchart';
import FinopsTable from '../components/pages/FinopsTable';
import RangeChart from "../components/pages/RangeChart";
import moment from 'moment';
import YearlyTrend from "../shortage/components/YearlyTrend";

const PriceClaim = () => {
	const theme = useTheme();
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
	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));

    return (
        <PageContainer title="Price Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Price Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Price Claim' />
				</Grid>
				<Grid item xs ={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} my={2}>
							<Typography variant='h3'>Price Claim Dispute</Typography>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Disputed</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>$1,330,771.61</Typography>
									<IconExclamationCircle size='70' style={{position:'absolute', right:'25px', bottom:'30px', color: theme.palette.primary.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Pending With Amazon</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.warning.main }}>${new Intl.NumberFormat().format(538941)}</Typography>
									<Box style={{position:'absolute', right:'10px', bottom:'10px'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="130" chartHeight="120" chartLableFonrSize="16px"  /></Box>
								</DashboardCard>
							</ClaimCard>
						</Grid>
						<Grid item sm={6} md={3}>
							<ClaimCard>
								<DashboardCard title={<Typography variant='h6'>Total Denied</Typography>}>
									<Typography variant='h4' sx={{ color: theme.palette.error.main }}>${new Intl.NumberFormat().format(6894247)}</Typography>
									<IconThumbDown size='70' style={{position:'absolute', right:'25px', bottom:'30px', color: theme.palette.error.main}}/>
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
										<ButtonStyled component={Link} to="/shortage-log">View <IconChevronRight size="16" /></ButtonStyled>
									}
								>
									<Typography variant='h4' sx={{ color: theme.palette.success.dark }}>${new Intl.NumberFormat().format(4942234)}</Typography>
									<IconThumbUp size='70' style={{position:'absolute', right:'25px', bottom: '30px', color: theme.palette.success.main}}/>
								</DashboardCard>
							</ClaimCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DashboardCard  title={<Typography variant='h4'>Price Claim</Typography>}>
				    	<FinopsTable />
					</DashboardCard>
				</Grid>
				<Grid item xs={12}>
					<DashboardCard>
				    	<RangeChart />
					</DashboardCard>
				</Grid>
            </Grid>
        </PageContainer>
    )
}

export default PriceClaim;