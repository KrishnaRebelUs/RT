import React from 'react';
import { Typography, Box,TableHead, styled, useTheme, Button, LinearProgress
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight } from '@tabler/icons-react';
import moment from 'moment';
import DataTable from 'react-data-table-component';
import '../../../theme/TableStyle.css'
import { width } from '@mui/system';



const job = [
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 100
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 60
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 25
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: 60
    },
    // {
    //     Vendor: 'Au-Califal',
    //     Date: '11/04/24 11:50 AM',
    //     Type: 'Quantity Mismatch',
    //     Id: '88799979',
    //     Task: 'Pulling Po Invoice Data(3/3)',
    //     Progress: 4
    // }
];
const TableHeadStyled = styled(TableHead)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '7px',
}));

const TableTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '14px',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '12px',
    padding: '5px 12px',
    fontWeight: '600',
    '&:hover': {
        backgroundColor: theme.palette.primary.extraLight,
        color: theme.palette.primary.main,
    },
}));

const JobProgress = () => {
    const theme = useTheme();
    const columns = [
        {
            name: 'Vendor Name',
            selector: row => row.Vendor,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.Date,
            formatter: row => moment(row.Date).format('MM/DD/YY HH:mm'),
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => row.Type,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' style={{ textAlign: 'left',color:theme.palette.accent.main }}>{row.Type}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'Agreement Id / Disputed Id',
            selector: row => row.Id,
            sortable: true,
        },
        {
            name: 'Pending Task',
            selector: row => row.Task,
            sortable: true,
        },
        {
            name: 'Progress',
            selector: row => row.Progress,
            cell : (row, index, column, id) => {
                return (
                    <Box style={{ display: 'flex', flexDirection:'column-reverse', width: '100%' }}>
                        <LinearProgress variant="determinate" color="success" value={row.Progress} style={{color:'#eee', height: "10px",borderRadius:'4px'}} />
                        <Typography variant='body2' style={{ textAlign: 'right' }}>{row.Progress}%</Typography>
                    </Box>
                );
            },
            sortable: true,
        },
    ];

    return (
        <DashboardCard title={
            <Typography variant='h5'>Jobs in Progress</Typography>
        } action={
            <ButtonStyled>Export  <IconFileArrowRight size="18" style={{ marginLeft: '5px' }} /></ButtonStyled>
        }>
            <Box>
                <DataTable
                    columns={columns}
                    data={job}
                    pagination
                />
            </Box>
        </DashboardCard>
    );
};

export default JobProgress;
