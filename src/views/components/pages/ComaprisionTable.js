import React, { useState } from 'react';
import { styled, Typography, Box,Stack, useTheme, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'; 
import {IconExclamationMark } from '@tabler/icons-react';
import { height } from '@mui/system';




const BoxStyled = styled(Box)(({ theme}) => ({
   height: '600px',
   overflowY: 'auto',
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.extraLight
}));


const TableCellStyled = styled(TableCell)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: '600',
}));


const ComaprisionTable = () => {
    const theme = useTheme();    
    const formatNumber = (number) => new Intl.NumberFormat().format(number);
    const ComaprisionTable = [
        {
           id:1,
           Settlement: { value: "PO's Placed" },
		   JanToFeb: { value: '$18,305,784.75', color: theme.palette.primary.main },
		   TwentyTwo: { value: '$144,169,241.47', color: theme.palette.primary.main },
		   TwentyOne: { value: '$163,343,176.23', color: theme.palette.primary.main },
        },
		{
			id:2,
			Settlement: { value: "PO's Accepted" },
			JanToFeb: { value: '$9,316,674.98', color: theme.palette.primary.main },
		    TwentyTwo: { value: '$46,620,193.60', color: theme.palette.primary.main },
		    TwentyOne: { value: '$48,591,130.71', color: theme.palette.primary.main },
			
		 },
		 { 
			id: 3,
		    Settlement: { value: "PO Acceptance Rate" },
			JanToFeb: { value: '50.89%', color: theme.palette.success.extraDark },
			TwentyTwo: { value: '32.34%', color: theme.palette.success.extraDark },
			TwentyOne: { value: '32.34%', color: theme.palette.success.extraDark },
		 },
		 {
			id:4,
			Settlement: { value: "Payments Received - Inventory Sales" },
			JanToFeb: { value: '$11,693,268.33', color: theme.palette.primary.main },
			TwentyTwo: { value: '$56,171,119.61', color: theme.palette.primary.main },
			TwentyOne: { value: '$55,483,524.97', color: theme.palette.primary.main },
			
		 },
		 {
			id:5,
			Settlement: { value: "Payments Received - Dropship Sales" },
			JanToFeb: { value: '$0.00', color: theme.palette.primary.main },
			TwentyTwo: { value: '$0.00', color: theme.palette.primary.main },
			TwentyOne: { value: '$0.00', color: theme.palette.primary.main },
		 },
		 {
			id:6,
		    Settlement: { value: "Total Payments Received" },
			JanToFeb: { value: '$11,693,268.33', color: theme.palette.primary.main },
			TwentyTwo: { value: '$56,171,119.61', color: theme.palette.primary.main },
			TwentyOne: { value: '$55,483,524.97', color: theme.palette.primary.main },
		 },
		 {
			id:7,
			Settlement: { value: "% +/- (Previous Year)" },
			JanToFeb: '',
			TwentyTwo: { value: '1.24%', color: theme.palette.success.extraDark },
			TwentyOne: { value: '-0.82%', color: theme.palette.error.main },
		 },
		 {
			id:8,
			Settlement: { value: "2024 Total Payment Receipt Forecast" },
			JanToFeb: { value: '$70,159,609.98', color: theme.palette.primary.main },
			TwentyTwo: '',
			TwentyOne: '',
		 },
		 {
			id:9,
			Settlement: { value: "% +/- (Previous Year)" },
			JanToFeb: { value: '24.90%', color: theme.palette.success.extraDark },
			TwentyTwo: '',
			TwentyOne: '',
		 },
		 {
			id:10,
			Settlement: { value: "Gross Margin %" },
			JanToFeb: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end', width:'120px', padding: '5px 7px' },
			TwentyTwo: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px' },
			TwentyOne: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px' },
		 },
		 {
			id:11,
			Settlement: { value: "Gross Profit" },
			JanToFeb: { value: '$5,846,634.17', color: theme.palette.primary.main },
			TwentyTwo: { value: '$28,085,559.80', color: theme.palette.primary.main },
			TwentyOne: { value: '$27,741,762.49', color: theme.palette.primary.main },
		 },
		 {
			id:12,
			Settlement: { value: "SG&A % ",value2: 'IconExclamation' },
			JanToFeb: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end', width:'120px', padding: '5px 7px' },
			TwentyTwo: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px' },
			TwentyOne: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px' },
		 },
		 {
			id:13,
			Settlement: { value: "SG&A ($) ",value2: 'IconExclamation' },
			JanToFeb: {value: '$2,338,653.67', color: theme.palette.primary.main },
			TwentyTwo: {value: '$11,234,223.92', color: theme.palette.primary.main },
			TwentyOne: {value: '$11,096,704.99', color: theme.palette.primary.main },
		 },
       
     
    ];

	const ComaprisionTwoTable = [
     {
		id: 1,
		Settlement: "Deduction",
		JanToFeb: {value: 'Amount', color: theme.palette.primary.main,value2: 'IconExclamation' },
		TwentyTwo: {value: 'Amount', color: theme.palette.primary.main,value2: 'IconExclamation' },
		TwentyOne: {value: 'Amount', color: theme.palette.primary.main ,value2: 'IconExclamation'},
	
	 },
	 {
		id: 2,
		Settlement: "AMS (Excl. Credit Card)",
		JanToFeb: {value: '$818,206.81', color: theme.palette.primary.main, value2: '7.00%' },
		TwentyTwo: {value: '$3,437,080.09', color: theme.palette.primary.main,value2: '6.12%' },
		TwentyOne: {value: '$2,967,239.53', color: theme.palette.primary.main, value2: '5.35%' },
	
	 },
	 {
		id: 3,
		Settlement: "AMS (Credit Card Spend)",
		JanToFeb: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end', width:'120px', padding: '5px 7px' ,value2: '7.00%'},
		TwentyTwo: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px', value2: '', },
	    TwentyOne: { value: '50', color: theme.palette.primary.main,backgroundColor: theme.palette.grey.main, borderRadius: '20px', textAlign: 'end',width:'120px', padding: '5px 7px', value2:'5.35%' },
		
	
	 },
	 {
		id: 4,
		Settlement: "C2FO Credit Memo",
		JanToFeb: { value: '$0.00', color: theme.palette.primary.main, value2: '$0.00'},
		TwentyTwo: { value: '$0.00', color: theme.palette.primary.main, value2: '$0.00' },
		TwentyOne: { value: '$0.00', color: theme.palette.primary.main, value2: '$0.00' },
	
	 },
	 {
		id: 5,
		Settlement: "CoOp (Incl. Accruals, Promotions, PP, Straight Pays Etc) ",
		JanToFeb: {value: '$2,363,710.60', color: theme.palette.primary.main, value2:'20.21%' },
		TwentyTwo: {value: '$3,437,080.09', color: theme.palette.primary.main, value2:'%6.12%' },
		TwentyOne: {value: '$2,967,239.53', color: theme.palette.primary.main, value2: '5.35%' },
	
	 },
	 {
		id: 6,
		Settlement: "CoOp deduction",
		JanToFeb: {value: '$818,206.81', color: theme.palette.primary.main, value2: '7.00%' },
		TwentyTwo: {value: '$3,437,080.09', color: theme.palette.primary.main, value2: '6.12%' },
		TwentyOne: {value: '$2,967,239.53', color: theme.palette.primary.main,  value2: '5.35%'  },
	
	 },
	 {
		id: 7,
		Settlement: "Operational Chargeback Total",
		JanToFeb: {value: '$818,206.81', color: theme.palette.primary.main, value2: '7.00%' },
		TwentyTwo: {value: '$3,437,080.09', color: theme.palette.primary.main, value2: '6.12%' },
		TwentyOne: {value: '$2,967,239.53', color: theme.palette.primary.main,  value2: '5.35%'  },
	
	 },
	 {
		id: 8,
		Settlement: "OC - ASN Accuracy",
		JanToFeb: {value: '$', color: theme.palette.primary.main,value2:'%' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2:'%'  },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main, value2:'%'  },
	
	 },
	 {
		id: 9,
		Settlement: "OC - ASN accuracy",
		JanToFeb: {value: '$18,726.91', color: theme.palette.primary.main, value2:'100%' },
		TwentyTwo: {value: '$', color: theme.palette.primary.main, value2:'%' },
		TwentyOne: {value: '$', color: theme.palette.primary.main, value2:'%' },
	
	 },
	 {
		id: 10,
		Settlement: "Net Post Audit Deduction",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 11,
		Settlement: "Net Price Claim",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 12,
		Settlement: "Net Shortage",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 13,
		Settlement: "Return Deduction",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 14,
		Settlement: "Net Return Freight Charges",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 15,
		Settlement: "Net Return Handling Charges",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 16,
		Settlement: "Quick Pay Discount",
		JanToFeb: {value: '$0.00', color: theme.palette.primary.main,value2:'$0.00' },
		TwentyTwo: {value: '$89,607.99', color: theme.palette.primary.main, value2: '0.16%' },
		TwentyOne: {value: '$44,164.93', color: theme.palette.primary.main,value2:'5.35%' },
	
	 },
	 {
		id: 17,
		Settlement: "Total Deductions",
		JanToFeb: {value: '$3,257,746.48', color: theme.palette.primary.main,value2:'27.86%' },
		TwentyTwo: {value: '$16,882,708.59', color: theme.palette.primary.main, value2: '30.06%' },
		TwentyOne: {value: '$15,598,910.29', color: theme.palette.primary.main,value2:'28.11%' },
	
	 },
	
     
    ];
	const ComparisonTwoNewTable = [
		{
		id: 1,
		Settlement: "Provision Deduction",
		JanToFeb: {value: '$3,257,746.48', color: theme.palette.primary.main,value2:'27.86%' },
		TwentyTwo: {value: '$16,882,708.59', color: theme.palette.primary.main, value2: '30.06%' },
		TwentyOne: {value: '$15,598,910.29', color: theme.palette.primary.main,value2:'28.11%' },
		 },
	];
	const ComparisonNewTable = [
		{
			id:1,
			Settlement:{value: 'EBITDA%', color: theme.palette.primary.main, value2: 'IconExclamation' },
			JanToFeb: { value: '-0.04%', color: theme.palette.primary.main },
			TwentyTwo: { value: '-0.04%', color: theme.palette.error.main },
			TwentyOne: { value: '-0.04%', color: theme.palette.error.main },
		 },
		 {
			 id:2,
			 Settlement:{value: 'EBITDA%', color: theme.palette.primary.main,value2: 'IconExclamation' },
			 JanToFeb: { value: '$250,234.02', color: theme.palette.primary.main },
			 TwentyTwo: { value: '$-23,221.32', color: theme.palette.primary.main },
			 TwentyOne: { value: '$-23,221.32', color: theme.palette.primary.main },
			 
		  },
		  { 
			 id: 3,
			 Settlement:{value: '% +/- Against Previous Year', color: theme.palette.primary.main},
			 JanToFeb: { value: '0%', color: theme.palette.success.extraDark },
			 TwentyTwo: { value: '-101.79%', color: theme.palette.error.main },
			 TwentyOne: { value: '-101.79%', color: theme.palette.error.main },
		  },
	];
	const Comparisontable = [
		{
			id: 1,
		    Settlement: "OC - SIOC Incentive",
		    JanToFeb: {value: '0%', color: theme.palette.primary.main,},
			TwentyTwo: { value: '-101.79%', color: theme.palette.error.main },
			TwentyOne: { value: '-101.79%', color: theme.palette.error.main },
		 },
		 {
			 id:2,
			 Settlement: "CoOp Refund (Incl. Accruals, Promotions, PP, Straight Pays Etc) ",
		     JanToFeb: {value: '0%', color: theme.palette.primary.main,},
		     TwentyTwo: { value: '-101.79%', color: theme.palette.error.main },
			 TwentyOne: { value: '-101.79%', color: theme.palette.error.main },
			 
		  },
		  { 
			 id: 3,
			 Settlement: "CoOp Refund",
		     JanToFeb: {value: '$', color: theme.palette.primary.main,},
		     TwentyTwo: { value: '$8,151.39', color: theme.palette.primary.main },
			 TwentyOne: { value: '-92.29%', color: theme.palette.primary.main, value2:'$248,583.10' },
		  },
		  { 
			id: 4,
			Settlement: "Return Refund",
			JanToFeb: {value: '0%', color: theme.palette.primary.main,},
			TwentyTwo: { value: '-101.79%', color: theme.palette.error.main },
			TwentyOne: { value: '-101.79%', color: theme.palette.error.main },
		 },
		 { 
			id: 5,
			Settlement: "Provision Reversal",
			JanToFeb: {value: '$$2,360,412.15', color: theme.palette.primary.main,},
			TwentyTwo: { value: '$2,850,111.54', color: theme.palette.primary.main },
			TwentyOne: { value: '$2,850,111.54', color: theme.palette.primary.main,},
		 },
	]
    return (
        <BoxStyled>
			<Table>
				<TableHead>
					<TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}></TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>Jan To Feb-2023</TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>2022</TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>2021</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ComaprisionTable.map((row, index) => (
					<TableRowStyled key={row.id} index={index} theme={theme}>
				    {(row.Settlement.value !== "SG&A %" || row.Settlement.value !== "SG&A ($)") && (
                <TableCellStyled>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='body2' style={{ color: row.Settlement.color, fontWeight:'500', fontSize:'15px'}}>{row.Settlement.value}</Typography>
                        {row.Settlement.value2 && (
                            <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
                            </div>
                        )}
                    </Stack>
                </TableCellStyled>
            )}
            {row.Settlement.value === "SG&A %" && row.Settlement.value === "SG&A ($)" && (
                <TableCellStyled>
                    <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                        <Typography variant='body2' style={{ color: row.Settlement.color, fontWeight:'500', fontSize:'15px'}}>{row.Settlement.value}</Typography>
                        <Typography variant='body2' style={{color: theme.palette.success.extraDark,fontWeight:'500', fontSize:'15px',}}>{row.Settlement.value2}</Typography>
                    </Stack>
                </TableCellStyled>
            )}
			 			<TableCellStyled><Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width, padding: row.JanToFeb.padding  }}>{row.JanToFeb.value}</Typography></TableCellStyled>
						<TableCellStyled><Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.JanToFeb.textAlign,fontWeight:'500', fontSize:'14px', width: row.TwentyTwo.width, padding: row.TwentyTwo.padding   }}>{row.TwentyTwo.value}</Typography></TableCellStyled>
						<TableCellStyled><Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign,fontWeight:'500', fontSize:'14px', width: row.TwentyOne.width, padding: row.TwentyOne.padding    }}>{row.TwentyOne.value}</Typography></TableCellStyled>
					</TableRowStyled>
					))}
				</TableBody>
				<TableHead>
					<TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}></TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>Jan To Feb-2023</TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>2022</TableCell>
						<TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>2021</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ComaprisionTwoTable.map((row, index) => (
					<TableRowStyled key={row.id} index={index} theme={theme}>
					
					<TableCellStyled><Typography variant='body2'  style={{fontWeight:'500', fontSize:'15px'}}>{row.Settlement}</Typography></TableCellStyled>
					<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,padding: row.JanToFeb.padding}}>{row.JanToFeb.value}</Typography>
                         {row.JanToFeb.value2 && (
                         <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,padding: row.JanToFeb.padding}}>{row.JanToFeb.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.success.extraDark,fontWeight:'500', fontSize:'15px',}}>{row.JanToFeb.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
					<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.TwentyTwo.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyTwo.width,padding: row.TwentyTwo.padding}}>{row.TwentyTwo.value}</Typography>
                         {row.JanToFeb.value2 && (
                          <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						  <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					      </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyTwo.width, padding: row.TwentyTwo.padding }}>{row.JanToFeb.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.success.extraDark,fontWeight:'500', fontSize:'15px',}}>{row.TwentyTwo.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			     	<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         {row.TwentyOne.value2 && (
                         <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.success.extraDark,fontWeight:'500', fontSize:'15px',}}>{row.TwentyOne.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			    	</TableRowStyled>
				
					))}
				</TableBody>
				<TableHead>
					<TableRow style={{ backgroundColor: theme.palette.grey.main}}>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
    {ComparisonNewTable.map((row, index) => (
        <TableRowStyled key={row.id} index={index} theme={theme}>
            {row.Settlement.value === "EBITDA%" ? (
                <TableCellStyled>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='body2' style={{ color: row.Settlement.color, fontWeight:'500', fontSize:'15px'}}>{row.Settlement.value}</Typography>
                        {row.Settlement.value2 && (
                            <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
                            </div>
                        )}
                    </Stack>
                </TableCellStyled>
            ) : (
                <TableCellStyled>
                    <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                        <Typography variant='body2' style={{ color: row.Settlement.color, fontWeight:'500', fontSize:'15px'}}>{row.Settlement.value}</Typography>
                        <Typography variant='body2' style={{color: theme.palette.success.extraDark,fontWeight:'500', fontSize:'15px',}}>{row.Settlement.value2}</Typography>
                    </Stack>
                </TableCellStyled>
            )}
            
            <TableCellStyled><Typography variant='body2' style={{ color: row.JanToFeb.color, fontWeight:'500', fontSize:'15px'}}>{row.JanToFeb.value}</Typography></TableCellStyled>
            <TableCellStyled><Typography variant='body2' style={{ color: row.TwentyTwo.color, fontWeight:'500', fontSize:'14px'}}>{row.TwentyTwo.value}</Typography></TableCellStyled>
            <TableCellStyled><Typography variant='body2' style={{ color: row.TwentyOne.color, fontWeight:'500', fontSize:'14px'}}>{row.TwentyOne.value}</Typography></TableCellStyled>
        </TableRowStyled>
    ))}
                </TableBody>
				<TableHead>
					<TableRow style={{ backgroundColor: theme.palette.grey.main}}>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ComparisonTwoNewTable.map((row, index) => (
					<TableRowStyled key={row.id} index={index} theme={theme}>
					
					<TableCellStyled><Typography variant='body2'  style={{fontWeight:'500', fontSize:'15px',color: theme.palette.primary.main}}>{row.Settlement}</Typography></TableCellStyled>
					<TableCellStyled>{row.Settlement !== "Provision Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,}}>{row.JanToFeb.value}</Typography>
                         {row.JanToFeb.value2 && (
                         <div style={{ backgroundColor: theme.palette.primary.main, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,}}>{row.JanToFeb.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.JanToFeb.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
					<TableCellStyled>{row.Settlement !== "Provision Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,}}>{row.JanToFeb.value}</Typography>
                         {row.JanToFeb.value2 && (
                          <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						  <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					      </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyTwo.width, padding: row.TwentyTwo.padding }}>{row.JanToFeb.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.TwentyTwo.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			     	<TableCellStyled>{row.Settlement !== "Provision Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         {row.TwentyOne.value2 && (
                         <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.TwentyOne.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			    	</TableRowStyled>
				
					))}
				</TableBody>
				<TableHead>
					<TableRow style={{ backgroundColor: theme.palette.grey.main}}>
						<TableCell><Typography variant='body2' style={{color:theme
						.palette.primary.main,fontSize: '15px', fontWeight:'500', }} >Refunds & Reversals</Typography></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Comparisontable.map((row, index) => (
					<TableRowStyled key={row.id} index={index} theme={theme}>
					
					<TableCellStyled><Typography variant='body2'  style={{fontWeight:'500', fontSize:'15px'}}>{row.Settlement}</Typography></TableCellStyled>
					<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,padding: row.JanToFeb.padding}}>{row.JanToFeb.value}</Typography>
                         {row.JanToFeb.value2 && (
                         <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.JanToFeb.color, backgroundColor: row.JanToFeb.backgroundColor, borderRadius: row.JanToFeb.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.JanToFeb.width,}}>{row.JanToFeb.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.JanToFeb.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
					<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.TwentyTwo.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyTwo.width,padding: row.TwentyTwo.padding}}>{row.TwentyTwo.value}</Typography>
                         {row.JanToFeb.value2 && (
                          <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						  <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					      </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyTwo.color, backgroundColor: row.TwentyTwo.backgroundColor, borderRadius: row.TwentyTwo.borderRadius, textAlign: row.JanToFeb.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyTwo.width, padding: row.TwentyTwo.padding }}>{row.TwentyTwo.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.TwentyTwo.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			     	<TableCellStyled>{row.Settlement === "Deduction" ? (
                       <Stack direction='row' spacing={4} alignItems='center' justifyContent= 'space-between'>
                          <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         {row.TwentyOne.value2 && (
                         <div style={{ backgroundColor: theme.palette.success.extraDark, borderRadius: '50%', padding: '2px', height:'15px', width:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>
						 <IconExclamationMark size={16} strokeWidth={1.5} style={{ color:'white' }} />
					     </div>
                          )}
                        </Stack>
                         ) : (
                        <Stack direction='row' spacing={4} alignItems='center' justifyContent='space-between'>
                         <Typography variant='body2' style={{ color: row.TwentyOne.color, backgroundColor: row.TwentyOne.backgroundColor, borderRadius: row.TwentyOne.borderRadius, textAlign: row.TwentyOne.textAlign, fontWeight:'500', fontSize:'15px', width: row.TwentyOne.width, padding: row.TwentyOne.padding }}>{row.TwentyOne.value}</Typography>
                         <Typography variant='body2' style={{color: theme.palette.primary.main,fontWeight:'500', fontSize:'15px',}}>{row.TwentyOne.value2}</Typography>
                        </Stack>
                    )}</TableCellStyled>
			    	</TableRowStyled>
				
					))}
				</TableBody>


			</Table>
		</BoxStyled>
    );
};

export default ComaprisionTable;
