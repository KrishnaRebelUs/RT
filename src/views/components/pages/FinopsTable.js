import React, { useState } from 'react';
import { Box, Grid, Tab, Typography, Table, TableBody, TableCell, TableHead, TableRow, useTheme,styled , Button} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardCard from '../../../components/shared/DashboardCard';
import DataTable from 'react-data-table-component';


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

export const ExportCSVBTN = () => {

	return (
		<Button variant="contained" color="primary">Export CSV</Button>
	);
};

const FinopsTable = () => {
    const [value, setValue] = useState('1');
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        {
            name: 'DisputeID',
            selector: row => row.DisputeID,
            sortable: true,
        },
        {
            name: 'DisputeType',
            selector: row => row.DisputeType,
            sortable: true,
        },
        {
            name: 'DisputeDate',
            selector: row => row.DisputeType,
            sortable: true,
        },
        {
            name: 'DisputeStatus',
            selector: row => row.DisputeStatus,
            sortable: true,
        },
        {
            name: 'DisputeAmount',
            selector: row => row.DisputeAmount,
            sortable: true,
        },
        {
            name: 'ApprovedAmount',
            selector: row => row.ApprovedAmount,
            sortable: true,
        },
    ];
    
    const data = [
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "100",
        },
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "14000",
        },
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "105500",
        },
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "1042100",
        },
        {
            DisputeID: "#908897968",
            DisputeType: "362,356.00",
            DisputeDate: "11/4/24",
            DisputeStatus: "Received",
            DisputeAmount: "362,356.00",
            ApprovedAmount: "10012120",
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
                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        actions={<ExportCSVBTN />}
                                    />
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
