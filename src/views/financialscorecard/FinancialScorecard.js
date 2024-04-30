import React,{useState} from "react";
import { Box, styled, Typography,Grid,Stack,FormControlLabel ,Switch} from "@mui/material";
import { useTheme } from "@emotion/react";
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import Header from "../components/pages/Header";
import DashboardCard from '../../components/shared/DashboardCard';
import {IconArrowUpRight} from '@tabler/icons-react';
import ColumnChart from "../components/pages/ColumnChart";
import LineChart from "../components/pages/LineChart";



const FinancialScorecard = () => {
	// const [state, setState] = useState({
	// 	gilad: true,
	//   });
	
	//   const handleChange = (event) => {
	// 	setState({
	// 	  ...state,
	// 	  [event.target.name]: event.target.checked,
	// 	});
	//   };
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
										<Typography variant="subtitle2"  sx={{ color: theme.palette.text.dark }} fontWeight={600}><BoxStylegreen />User</Typography>
										<Typography variant="subtitle2"  sx={{ color: theme.palette.text.dark }} fontWeight={600}><BoxStyleblue /> Product</Typography>
										<Typography variant="subtitle2"  sx={{ color: theme.palette.text.dark }} fontWeight={600}><BoxStylegreen />categories</Typography>
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
										<Typography variant="subtitle2"  sx={{ color: theme.palette.text.dark }} fontWeight={600}><BoxStylegreen /> Past</Typography>
										<Typography variant="subtitle2"  sx={{ color: theme.palette.text.dark }} fontWeight={600}><BoxStyleblue />Latest</Typography>
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
								{/* <FormControlLabel  control={<Switch checked={state.gilad} onChange={handleChange}/>   }/> */}
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