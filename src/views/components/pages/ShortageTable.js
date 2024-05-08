import React, { useState } from 'react';
import { styled, Typography, Box, useTheme, IconButton, Grid, Button, Table, TableHead, TableBody, TableRow, TableCell, Input, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; 
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight, IconFileArrowLeft, IconEye, IconPencil } from '@tabler/icons-react';
import { Link } from 'react-router-dom';


const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrast,
    border: '1px solid',
    borderColor: theme.palette.primary.contrast,
    color: theme.palette.primary.contrastText,
    fontSize: '11px',
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

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: '600',
}));

const ShortageTable = () => {
    const theme = useTheme();
    const [editableId, setEditableId] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const [open, setOpen] = useState(false);
    const [editedValue, setEditedValue] = useState('');

    const formatNumber = (number) => new Intl.NumberFormat().format(number);
    const handleEdit = (id) => {
        console.log("Edit clicked for id:", id);
        setEditableId(id);
        setOpen(true);
        setEditedValue(editedValues[id] || (shortagetble.find(item => item.id === id)?.Active?.[0]) || '');
    };

    const handleView = (id) => {
        console.log("View clicked for id:", id);
    };

    const handleInputChange = (event) => {
        setEditedValue(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setEditedValues({ ...editedValues, [editableId]: editedValue });
        setOpen(false);
    };

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
            Active: ["24/11/23"],
            
         
         },
         {
            id:3,
            Settlement: "End Audit Period",
            Active:["24/11/23"],
            color: theme.palette.error.main
            
         
         },
         {
            id:4,
            Settlement: "Case ID & Creation Date",
            Active: ['1423658', '24/11/23'],
         
         },
         {
            id:5,
            Settlement: "Open Balance & Confirmation Date",
            Active:['$ 36,230.20','16/06/23'],
            color: theme.palette.accent.main
         },
         {
            id:7,
             Settlement: "Settlement Offer",
             Active: ['$ 36,230.20', '04/08/23'],
          
          },
          {
            id:8,
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '04/08/23'],
         
         },
         {
            id:9,
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '04/08/23'],
         
         },
          {
            id:10,
            Settlement: "Settlement Amount",
            Active:["$ 36,230.20"],
            color:theme.palette.success.main
         
         },
     
    ];

    return (
        <DashboardCard>
            <Grid container spacing={3} marginBottom={3} alignItems='center' justifyContent='space-between'>
                <Grid item xs={5}><Typography variant='h4'>Shortage Claim Finding </Typography></Grid>
                <Grid item xs={7}>
                    <Grid container spacing={1}>
                        <Grid item><ButtonStyled><BoxStyled>Export</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowRight size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                        <Grid item><ButtonStyled><BoxStyled>Import</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowLeft size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                        <Grid item><ButtonStyled component={Link} to="/shortage-claim-finding"><BoxStyled>View Details</BoxStyled></ButtonStyled></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Settlement</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Active</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shortagetble.map((row) => (
                        <TableRow key={row.id}>
                            <TableCellStyled>{row.Settlement}</TableCellStyled>
                            <TableCellStyled style={{ color: row.color }}>
                                {Array.isArray(row.Active) ? (
                                    <>
                                        {row.Active.map((item, index) => (
                                            <span key={index}>
                                                {index > 0 && <br />}
                                                {editableId === row.id ? (
                                                    <Input 
                                                        value={editedValue} 
                                                        onChange={handleInputChange} 
                                                    />
                                                ) : (
                                                    item
                                                )}
                                            </span>
                                        ))}
                                    </>
                                ) : editableId === row.id ? (
                                    <Input 
                                        value={editedValue} 
                                        onChange={handleInputChange} 
                                    />
                                ) : (
                                    row.Active
                                )}
                                {row.id  && (
                                    <>
                                        <IconButton onClick={() => handleEdit(row.id)}><IconPencil size="16" /></IconButton>
                                        <IconButton onClick={() => handleView(row.id)}><IconEye size="16" /></IconButton>
                                    </>
                                )}
                            </TableCellStyled>
                            <TableCellStyled> 
                                <ButtonStyled><BoxStyled>Upload</BoxStyled></ButtonStyled>
                            </TableCellStyled>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Value</DialogTitle>
                <DialogContent>
                    <Input value={editedValue} onChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </DashboardCard>
    );
};

export default ShortageTable;
