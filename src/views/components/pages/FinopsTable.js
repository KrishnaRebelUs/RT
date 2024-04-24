import React, { useState } from 'react';
import { Box, Grid, Tab, Typography, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCard from '../../../components/shared/DashboardCard';

const FinopsTable = () => {
    const [value, setValue] = useState('1');
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const finopsTableData = [
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1000",
        },
		{
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1000",
        },
		{
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1000",
        },
		{
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1000",
        },
		{
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1000",
        }
    ];

    return (
        <DashboardCard title={<Typography variant='h4'>FinOps-Shortage Claim</Typography>}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} indicatorColor="secondary">
                                        <Tab label="Approved" value="1" />
                                        <Tab label="Denied" value="2" />
                                        <Tab label="Pending" value="3" />
                                        <Tab label="All" value="4" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Dispute ID
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Dispute Type
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Dispute Date
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Dispute Status
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Dispute Amount
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        Approved Amount (As per VC)
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {finopsTableData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{row.DisputeID}</TableCell>
                                                    <TableCell>{row.DisputeType}</TableCell>
                                                    <TableCell>{row.DisputeDate}</TableCell>
                                                    <TableCell>{row.DisputeStatus}</TableCell>
                                                    <TableCell>{row.DisputeAmount}</TableCell>
                                                    <TableCell>{row.ApprovedAmount}</TableCell>
                                                </TableRow>
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
