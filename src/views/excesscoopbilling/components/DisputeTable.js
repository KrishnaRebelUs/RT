import React, {useState}from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, styled, useTheme, Button, Stack, TableContainer, Dialog,DialogTitle, DialogContent,  Grid, 
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import {IconPencil, IconTrash ,IconX} from '@tabler/icons-react';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import SelectCurrency from '../../../layouts/full/header/SelectCurrency';
import DataTable from 'react-data-table-component';
import moment from 'moment';


const TableHeadStyled = styled(TableHead)(({ }) => ({
    backgroundColor: '#00A15D',
    borderRadius:'7px',
   
}));
const TypographyStyled = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.main,
   marginBottom:'10px'
   
}));

const TableTypography = styled(TableCell)(({ theme, index }) => ({
    color: theme.palette.primary.contrastText,

}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    backgroundColor: index % 2 === 0 ? theme.palette.primary.contrastText: theme.palette.secondary.light,

}));
const ButtonClose = styled(Button)(({ theme }) => ({
    minWidth: '30px',
    height: '30px',
    backgroundColor: 'red',
    color: 'white',
    right: '15px',
    top: '15px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    }
}));

const DisputeTable = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);


    
const columns = [
    {
        name : 'Dispute ID',
        selector: row => row.Id,
        sortable: true,
    },
    {
        name : 'Dispute Amount',
        selector: row => row.Amount,
        sortable: true,
    },
    {
        name : 'Refund Amount',
        selector: row => row.Refund,
        sortable: true,
    },
    {
        name : 'Payment Received Date',
        selector: row => row.Payment,
        sortable: true,
        formatter: row => moment(row.Payment).format('DD/MM/YY')
    },
    {
        name : 'Payment Unique ID',
        selector: row => row.PaymentId,
        sortable: true,
    },
    {
        name : 'Status',
        selector: row => row.Status,
        sortable: true,
        cell: (row, index, column, id) => {
            return (
                <Box>
                    <Typography variant='body2' style={{ textAlign: 'center', color: 'green' }}>{row.Status}</Typography>
                </Box>
            );
        }
    },
    {
        name : 'Action',
        selector: row => row.Action,
        sortable: true,
        cell: (row, index, column, id) => {
            return (
                <Stack direction='row' alignItems='center'>
                    <Button size="small" startIcon={<IconPencil  size='16'/>}   onClick={handleEditClick} style={{minWidth: '0'}} ></Button>
                    <Button size="small" startIcon={<IconTrash size='16' />} style={{minWidth: '0'}} ></Button>
                </Stack>
            );
        }
    },
];

const disputeTable = [
    {
	   Id: 'DSPT11435911135',
	   Amount: '1234',
	   Refund: '3245',
	   Created: 'KB',
	   Date: '10/04/24',
	   Payment: '10/05/24',
	   PaymentId: '123',
	   ResolveDate: '10/06/24',
	   Reason: 'Promotional Billings',
	   Tat: '1 Day',
	   Status: 'Resolved',
	   Action: ''
    },
	{
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
	 {
		Id: 'DSPT11435911135',
		Amount: '1234',
		Refund: '3245',
		Created: 'KB',
		Date: '10/04/24',
		Payment: '10/05/24',
		PaymentId: '123',
		ResolveDate: '10/06/24',
		Reason: 'Promotional Billings',
		Tat: '1 Day',
		Status: 'Resolved',
		Action: ''
	 },
   
];

    const handleEditClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false); 
    };

    const ExpandedComponent = ({ data }) => {
        return (
            <Box>
                <TableContainer>
                    <Table>
                        <TableHeadStyled>
                            <TableRow>

                                <TableTypography>Created By </TableTypography>
                                <TableTypography>Created Date</TableTypography>
                                <TableTypography>Resolve Date</TableTypography>
                                <TableTypography>Reason</TableTypography>
                                <TableTypography>TAT</TableTypography>
                            </TableRow>
                        </TableHeadStyled>
                        <TableBody>
                            <TableRowStyled>
                                <TableCell>{data.Created}</TableCell>
                                <TableCell>{moment(data.Date).format('DD/MM/YY') }</TableCell>
                                <TableCell>{moment(data.ResolveDate).format('DD/MM/YY') }</TableCell>
                                <TableCell>{data.Reason}</TableCell>
                                <TableCell>{data.Tat}</TableCell>
                            </TableRowStyled>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }


    return (
        <DashboardCard>
            <Typography variant="h4" mb={2}>Dispute Table</Typography>
            <Box>
                <DataTable
                    columns={columns}
                    data={disputeTable}
                    pagination
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}

                />
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth='xs' style={{padding: '30px'}}>
            <Stack direction='row' justifyContent="space-between" borderBottom={1} borderColor="#eee">
				<DialogTitle variant='h3'>Manage Client Dispute</DialogTitle>
				<ButtonClose><IconX onClick={handleClose} size='16' /></ButtonClose>
			</Stack>
                <DialogContent>
                    <Grid container spacing={2} className="dispute-form">
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name'>
                                Dispute Id
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name'>
                                Dispute Amount
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name'>
                                Refund Amount
                            </TypographyStyled>
                           <Stack direction='row' spacing={2}>
                                <SelectCurrency fullWidth/>
                                <CustomTextField id="name" variant="outlined"  fullWidth />
                               
                           </Stack>
                        </Grid>
                           
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name'>
                                Payment Unique Id
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} marginBottom={1}>
                            <TypographyStyled variant="subtitle1" fontWeight={600} component="label" htmlFor='name'>
                                Payment Receive Date
                            </TypographyStyled>
                            <CustomTextField id="name" variant="outlined" type="date" fullWidth />
                        </Grid>
                        <Grid item container justifyContent="center" gap={1}>
                            <Button variant="contained" color="secondary">
                                Update
                            </Button>
                            <Button variant="contained" style={{backgroundColor: theme.palette.primary.light}}>
                                Cancel
                            </Button>
                           
                        </Grid>
                    </Grid>
                </DialogContent>

            </Dialog>
        </DashboardCard>
    );
};

export default DisputeTable;
