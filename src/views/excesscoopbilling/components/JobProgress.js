import React from 'react';
import { Typography, Box,TableHead, styled, useTheme, Button, LinearProgress, Grid
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
        Progress: '100%'
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: '60%'
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: '25%'
    },
    {
        Vendor: 'Au-Califal',
        Date: '11/04/24 11:50 AM',
        Type: 'Quantity Mismatch',
        Id: '88799979',
        Task: 'Pulling Po Invoice Data(3/3)',
        Progress: '60%'
    },
   
];


const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrast,
    border: '1px solid',
    borderColor: theme.palette.primary.contrast,
    color: theme.palette.primary.contrastText,
    fontSize: '12px',
    padding: '0',
    fontWeight: '600',
    transition: 'all ease 0.3s',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        borderColor:theme.palette.primary.main
    },
    '& .btn-indicator':{
        width: '1px',
        backgroundColor: theme.palette.primary.main,
        alignSelf: 'stretch',
        marginLeft: '4px'

    }
}));
const BoxStyled = styled(Box)(({ theme }) => ({
   
    padding: '5px 12px',
    fontWeight: '600',
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
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' style={{padding:'8px 0' }}>{row.Task}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'Progress',
            selector: row => row.Progress,
            cell : (row, index, column, id) => {
                return (
                    <Box width='100%' height='15px' style={{backgroundColor: '#eee', borderRadius:'7px', overflow: 'hidden'}}>
                        <Box width={row.Progress} height='100%' 
                            style={{
                                backgroundColor:theme.palette.success.main, 
                                color: theme.palette.primary.contrastText,
                                fontSize: '12px', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >{row.Progress}</Box>
                    </Box>
                );
            },
            sortable: true,
        },
    ];

    return (
        <DashboardCard>
            <Grid container spacing={3} marginBottom={3} alignItems='center'>
                <Grid item><Typography variant='h5'>Jobs in Progress</Typography></Grid>
                <Grid item><ButtonStyled><BoxStyled>Export</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowRight size="16" style={{margin:'auto', verticalAlign:'middle'}}/></BoxStyled></ButtonStyled></Grid>
            </Grid>
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
