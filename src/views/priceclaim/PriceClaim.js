import React from "react";
import { Box, styled, Typography, Avatar, Grid, Button   } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IconH1 } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconChevronRight,IconThumbUp, IconExclamationCircle, IconThumbDown } from '@tabler/icons-react';
import BarChart from '../components/pages/Barchart';
import FinopsTable from '../components/pages/FinopsTable';
import RangeChart from '../components/pages/RangeChart';

const PriceClaim = () => {
	const theme = useTheme();

    const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.dark,
		marginBottom: '15px',
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

	const ClaimCard = styled(Box)(({ theme }) => ({
		position: 'relative',
		minHeight: '200px',
		height: '100%'
	}));

    return (
        <PageContainer title="Shortage Claim">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Breadcrumb titles={['Price Claim']} />
				</Grid>
				<Grid item xs={12}>
					<Header title='Shortage' />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TypographyTitle variant='h3'>Price Claim Dispute</TypographyTitle>
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
									<Box style={{position:'absolute', right:'0', bottom:'10px'}}><BarChart color={theme.palette.accent.main} percentage={30} chartWidth="130" chartHeight="130" chartLableFonrSize="16px"  /></Box>
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
						<Grid item xs={12}>
							<FinopsTable />
						</Grid>
                    </Grid>
                </Grid>
				<Grid item xs={12}>
					<RangeChart />
				</Grid>
            </Grid>
        </PageContainer>
    )
}

export default PriceClaim;