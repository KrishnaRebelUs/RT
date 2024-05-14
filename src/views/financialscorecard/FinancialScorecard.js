import React,{useState} from "react";
import { Box, styled, Typography,Grid,Stack,FormControlLabel ,Switch,FormGroup} from "@mui/material";
import { useTheme } from "@emotion/react";
import PageContainer from "../../components/container/PageContainer";
// import Breadcrumb from "../components/pages/Breadcrumb";
// import Header from "../components/pages/Header";
// import DashboardCard from '../../components/shared/DashboardCard';
// import {IconArrowUpRight} from '@tabler/icons-react';
// import ColumnChart from "../components/pages/ColumnChart";
// import LineChart from "../components/pages/LineChart";



const FinancialScorecard = () => {

	const theme = useTheme();
	// const ClaimCard = styled(Box)(({ theme }) => ({
	// 	position: 'relative',
	// 	minHeight: '200px',
	// 	height: '100%'
	// }));
	// const BoxStylegreen = styled(Box)(({ theme }) => ({
	//    height: '10px',
	//    width: '10px',
	//    borderRadius: '50px',
	//    backgroundColor: theme.palette.success. extraDark,
	//    marginRight: '5px',
	//    display:'inline-flex'
	// }));
	// const BoxStyleblue = styled(Box)(({ theme }) => ({
	// 	height: '10px',
	// 	width: '10px',
	// 	borderRadius: '50px',
	// 	backgroundColor: theme.palette.primary.main,
	// 	marginRight: '5px',
	// 	display:'inline-flex'
	//  }));
	// const TypographyStyled = styled(Typography)(({ theme }) => ({
	// fontSize:'13px',
	// fontWeight: '600'
	// }));

	  

    return (
     <Box  style={{display:'flex', alignItems:'center', justifyContent:'center',height: '70vh'}}>
		<Typography variant='h1'> Cooming Soon</Typography>
	 </Box>
    )
}

export default FinancialScorecard;