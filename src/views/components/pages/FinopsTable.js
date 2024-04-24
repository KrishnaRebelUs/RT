import React, { useState } from 'react';
import { Box, Grid, Tab, Typography,styled,Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,useTheme } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCard from '../../../components/shared/DashboardCard';


const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius:'7px',
   
}));
const TableTypography = styled(TableHead)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '16px'
}));
const TableRowStyled = styled(TableRow)(({ theme }) => ({
     borderBottom: '1px solid #eee',
}));
const TableCellStyled = styled(TableCell)(({ theme, index }) => ({
    color: index % 2 === 0 ? theme.palette.secondary.main : theme.palette.accent.main,

}));

const finopstble = [
    {
       DisputeID: "#908897968",
	   DisputeType:"362,356.00",
       DisputeDate: "11/4/24",
	   DisputeStatus: "Recieved",
	   DisputeAmount:"362,356.00",
       ApprovedAmount: "1000",
    
    },
	{
		DisputeID: "#908897968",
		DisputeType:"362,356.00",
		DisputeDate: "11/4/24",
		DisputeStatus: "Recieved",
		DisputeAmount:"362,356.00",
		ApprovedAmount: "1000",
	 
	 },
	 {
		DisputeID: "#908897968",
		DisputeType:"362,356.00",
		DisputeDate: "11/4/24",
		DisputeStatus: "Recieved",
		DisputeAmount:"362,356.00",
		ApprovedAmount: "1000",
	 
	 },
	 {
		DisputeID: "#908897968",
		DisputeType:"362,356.00",
		DisputeDate: "11/4/24",
		DisputeStatus: "Recieved",
		DisputeAmount:"362,356.00",
		ApprovedAmount: "1000",
	 
	 },
	 {
		DisputeID: "#908897968",
		DisputeType:"362,356.00",
		DisputeDate: "11/4/24",
		DisputeStatus: "Recieved",
		DisputeAmount:"362,356.00",
		ApprovedAmount: "1000",
	 
	 }

    
 
];
const FinopsTable = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
	const theme = useTheme(); 

    return (
        <DashboardCard title={<Typography variant='h4'>FinOps-Shortage Claim</Typography>}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} indicatorColor="secondary">
									<Tab
											label="Approved"
											value="1"
											sx={{
												color: theme.palette.text.dark,
												'&.Mui-selected': {
													color: theme.palette.accent.main,
												},
											}}
										/>
                                        <Tab label="Denied" value="2"  sx={{
												color: theme.palette.text.dark,
												'&.Mui-selected': {
													color: theme.palette.accent.main,
												},
											}} />
                                        <Tab label="Pending" value="3"sx={{
												color: theme.palette.text.dark,
												'&.Mui-selected': {
													color: theme.palette.accent.main,
												},
											}}  />
                                        <Tab label="All" value="4" sx={{
												color: theme.palette.text.dark,
												'&.Mui-selected': {
													color: theme.palette.accent.main,
												},
											}}  />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
									<Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
										<TableHeadStyled theme={theme}>
											<TableRow>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													    Dispute Id
													</TableTypography>
												</TableCell>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													Dispute Type
													</TableTypography>
												</TableCell>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													Dispute Date
													</TableTypography>
												</TableCell>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													Dispute Status
													</TableTypography>
												</TableCell>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													Dispute Amount
													</TableTypography>
												</TableCell>
												<TableCell>
													<TableTypography variant="subtitle2" fontWeight={600}>
													Approved Amount(As per Vc)
													</TableTypography>
												</TableCell>
											
											</TableRow>
										</TableHeadStyled>
										<TableBody>
											{finopstble.map((finopstble, index) => (
												<TableRowStyled theme={theme} key={index}>
													<TableCellStyled index={index}>
														<Typography
															sx={{
																fontSize: "15px",
																fontWeight: "500",
															}}
														>
															{finopstble.DisputeID}
														</Typography>
													</TableCellStyled>
													<TableCell>
														<Typography variant="subtitle2" fontWeight={600}>
															{finopstble.DisputeType}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography variant="subtitle2" fontWeight={400}>
															{finopstble.DisputeDate}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography variant="subtitle2" fontWeight={600}>
															{finopstble.DisputeStatus}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography variant="subtitle2" fontWeight={600}>
															{finopstble.DisputeAmount}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography variant="subtitle2" fontWeight={400}>
															{finopstble.ApprovedAmount}
														</Typography>
													</TableCell>
													
												</TableRowStyled>
											))}
										</TableBody>
									</Table>
								</TabPanel>
                                <TabPanel value="2">Denied</TabPanel>
                                <TabPanel value="3">Pending</TabPanel>
                                <TabPanel value="4">All</TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </DashboardCard>
    );
};

export default FinopsTable;
