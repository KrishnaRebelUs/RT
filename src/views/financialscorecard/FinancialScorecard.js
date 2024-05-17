import React,{useState} from "react";
import { Box,Button, styled, Typography,Grid,Stack,useTheme} from "@mui/material";
import PageContainer from "../../components/container/PageContainer";
import Breadcrumb from "../components/pages/Breadcrumb";
import LineChart from '../components/pages/LineChart';
import ColumnChart from '../components/pages/ColumnChart';
import Header from "../components/pages/Header";
import DashboardCard from "../../components/shared/DashboardCard";
import { IconArrowUpRight} from '@tabler/icons-react';
import ComaprisionTable from "../components/pages/ComaprisionTable";


const FinancialScorecard = () => {
	const [isToggled, setIsToggled] = useState(false); 

	const handleToggle = () => {
        setIsToggled(!isToggled); 
    };
	const theme= useTheme();
	
	 const TypographyStyled = styled(Typography)(({ theme }) => ({
		fontSize:'13px',
		fontWeight: '600',
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
		 backgroundColor: theme.palette.primary.light,
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
							<DashboardCard title={<Typography variant='h4' sx={{ color: theme.palette.success.extraDark }}>2.14% <IconArrowUpRight size='16' /></Typography>}>
								<Typography variant='h4'>EBITDA % (YTD)</Typography>
									<Stack direction='row' spacing={1} marginTop={2}>
									<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStylegreen />Total User</TypographyStyled>
									<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStyleblue />Total Product</TypographyStyled>
									<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }}><BoxStylegreen />Total Categories</TypographyStyled>
									</Stack>
								<ColumnChart />
							</DashboardCard>
						</Grid>
						<Grid item sm={6} md={4}>
					         	<DashboardCard title={<Typography variant='h4' sx={{ color: theme.palette.success.extraDark  }}>$250,234 <IconArrowUpRight size='16' /></Typography>}>
									<Typography variant='h4'>EBITDA ($) YTD</Typography>
									<Stack direction='row' spacing={2} marginTop={2}>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStylegreen /> Past</TypographyStyled>
										<TypographyStyled variant="subtitle2"  sx={{ color: theme.palette.text.dark }} ><BoxStyleblue />Latest</TypographyStyled>
									 </Stack>
								    <LineChart />
								</DashboardCard>
						</Grid>
						<Grid item sm={6} md={4}>
					        	<DashboardCard title={<Typography variant='h4' sx={{ color: theme.palette.success.extraDark  }}>$2,360,412 <IconArrowUpRight size='16' /></Typography>}>
									<Typography variant='h4'>Provision Deduction YTD</Typography>
								    <ColumnChart />
								</DashboardCard>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs ={12}>
					<DashboardCard >
						<Grid container spacing={2}>
                         <Grid item>
						   <Typography variant="h3">Yearly Comparison</Typography>
						 </Grid>
						 <Grid item>
						   {/* <Button variant="contained" color={isToggled ? 'secondary' : 'primary'} onClick={handleToggle}>
                              {isToggled ? 'Simulated' : 'Simulate'}</Button> */}
						 </Grid>
						 <Grid item xs={12}>
						    <ComaprisionTable />
						 </Grid>
						</Grid>
					</DashboardCard>
				</Grid>
			</Grid>
		</PageContainer>
	);
};
export default FinancialScorecard;