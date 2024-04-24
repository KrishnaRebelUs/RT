import React, { useState } from 'react';
import { Box, Grid, Tab, Typography, Table, TableBody, TableCell, TableHead, TableRow, useTheme,styled } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCard from '../../../components/shared/DashboardCard';


const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));
const TableTypography = styled(TableCell)(({ }) => ({
    color: 'white',
    fontWeight: '600',
    fontSize: '14px'
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ?  theme.palette.primary.extraLight : theme.palette.primary.contrastText,
}));

const TabStyled = styled(Tab)(({ theme}) => ({
    fontWeight: '600',
    fontSize: '16px',
    padding: 0
}));

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
                                        <TabStyled label="Approved" value="1" />
                                        <TabStyled label="Denied" value="2" />
                                        <TabStyled label="Pending" value="3" />
                                        <TabStyled label="All" value="4" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1" style={{ padding: 0 }}>
                                    <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
                                        <TableHeadStyled>
                                            <TableRow>
                                                <TableTypography variant="subtitle2"  fontWeight={600}>Dispute ID</TableTypography>
												<TableTypography variant="subtitle2" fontWeight={600}>Dispute Type</TableTypography>
												<TableTypography variant="subtitle2" fontWeight={600}>Dispute Date</TableTypography>
												<TableTypography variant="subtitle2" fontWeight={600}>Dispute Status</TableTypography>
                                                <TableTypography variant="subtitle2" fontWeight={600}>Dispute Amount</TableTypography>
												<TableTypography variant="subtitle2" fontWeight={600}>Approved Amount (As per VC)</TableTypography>
                                            </TableRow>
                                        </TableHeadStyled>
                                        <TableBody>
                                            {finopsTableData.map((row, index) => (
                                                <TableRowStyled key={index}>
                                                    <TableCell>{row.DisputeID}</TableCell>
                                                    <TableCell>{row.DisputeType}</TableCell>
                                                    <TableCell>{row.DisputeDate}</TableCell>
                                                    <TableCell>{row.DisputeStatus}</TableCell>
                                                    <TableCell>{row.DisputeAmount}</TableCell>
                                                    <TableCell>{row.ApprovedAmount}</TableCell>
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
