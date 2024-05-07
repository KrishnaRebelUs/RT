import React from 'react';
import { styled, Typography, Box, useTheme, IconButton, Grid, Stack, Button } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconPencil, IconEye, IconFileArrowRight,IconFileArrowLeft } from '@tabler/icons-react';
import {
    GridRowModes,
    DataGrid,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrast,
    border: '1px solid',
    borderColor: theme.palette.primary.contrast,
    color: theme.palette.primary.contrastText,
    fontSize: '10px',
    padding: '0',
    fontWeight: '600',
    transition: 'all ease 0.3s',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main
    },
    '& .btn-indicator': {
        width: '1px',
        backgroundColor: theme.palette.primary.main,
        alignSelf: 'stretch',
        marginLeft: '4px'
    }
}));

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '3px 8px',
    fontWeight: '600',
}));

const ShortageTable = () => {
    const theme = useTheme();

    const formatNumber = (number) => new Intl.NumberFormat().format(number);
    const shortagetble = [
        {
            id:1,
           Settlement: "Shortage Claim Finding",
           Active: ["$ 36,230.20"],
           color: theme.palette.accent.main
        
        },
        {
            id:2,
            Settlement: " Start Audit Period",
            Active: ["11/24/23"],
            
         
         },
         {
            id:3,
            Settlement: "End Audit Period",
            Active:["11/24/23"],
            color: theme.palette.error.main
            
         
         },
         {
            id:4,
            Settlement: "Case ID & Creation Date",
            Active: ['1423658', '11/24/23'],
         
         },
         {
            id:5,
            Settlement: "Open Balance & Confirmation Date",
            Active:['$ 36,230.20','06/16/23'],
            color: theme.palette.accent.main
         },
         {
            id:7,
             Settlement: "Settlement Offer",
             Active: ['$ 36,230.20', '08/04/23'],
          
          },
          {
            id:8,
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '08/04/23'],
         
         },
         {
            id:9,
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '08/04/23'],
         
         },
          {
            id:10,
            Settlement: "Settlement Amount",
            Active:["$ 36,230.20"],
            color:theme.palette.success.main
         
         },
     
    ];

    const [rows, setRows] = React.useState(shortagetble);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleEditClick = (id, field) => () => {
        console.log('Edit row', id);
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        {
            field: 'Settlement',
            headerName: 'Settlement',
            width: 200,
            renderCell: (params) => {
                return (
                    <Typography variant="subtitle2" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                        {params.value}
                    </Typography>
                );
            }
        },
        {
            field: 'Active',
            editable: true,
            headerName: 'Active Cases($)',
            width: 250,
            renderCell: (params) => {
                return (
                    <Stack direction='row' spacing={3} alignItems='center'>
                        <Typography variant="subtitle2" fontWeight={600} style={{ color: params.row.color }}>
                            {params.value[0]}
                            {params.value[1] && <Box>{params.value[1]}</Box>}
                        </Typography>
                        <IconButton aria-label="edit" size="small" onClick={handleEditClick(params.row.id, 'Active')}>
                            <IconPencil size='16' />
                        </IconButton>
                        <IconButton aria-label="edit" size="small" onClick={handleEditClick(params.row.id, 'Active')}>
                            <IconEye size='16' />
                        </IconButton>
                    </Stack>
                );
            }
        },
    ];

    return (
        <DashboardCard>
            <Grid container spacing={2} marginBottom={3} alignItems='center'>
                <Grid item><Typography variant='h4'>Shortage Claim Finding </Typography></Grid>
                <Grid item><ButtonStyled><BoxStyled>Export</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowRight size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                <Grid item><ButtonStyled><BoxStyled>Import</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowLeft size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                <Grid item><ButtonStyled><BoxStyled>View Details</BoxStyled></ButtonStyled></Grid>
            </Grid>
            <DataGrid
                rows={shortagetble}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                disableColumnMenu
                autoHeight
                hideScrollbar={true}
                hideCellRightBorder={true}
                hideColumnRightBorder={true}
                disableColumnResize
            />
        </DashboardCard>
    );
};

export default ShortageTable;
