import React, { useState } from 'react';
import { styled, Typography, Box, useTheme, Grid, Button, Table, TableHead,Input, TableBody, TableRow, TableCell,Dialog, DialogTitle,DialogActions, DialogContent } from '@mui/material'; 
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconFileArrowRight, IconFileArrowLeft,IconPencil,IconEye } from '@tabler/icons-react';

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
    padding: '5px 12px',
    fontWeight: '600',
}));

const TableCellStyled = styled(TableCell)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: '600',
}));
const TableRowStyled = styled(TableRow)(({ theme, index }) => ({
    borderBottom: '1px solid #eee',
    backgroundColor: index % 2 === 0 ? theme.palette.secondary.contrastText : theme.palette.primary.extraLight
}));

const ShortageClaimTable = () => {
    const theme = useTheme();
    const [editableId, setEditableId] = useState(null);
    const [editedValues, setEditedValues] = useState({});
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [viewDialogOpen, setViewDialogOpen] = useState(false);
    const [editedValue, setEditedValue] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);

    const formatNumber = (number) => new Intl.NumberFormat().format(number);
    const handleEdit = (id) => {
        console.log("Edit clicked for id:", id);
        setEditableId(id);
        setEditedValue(editedValues[id] || (shortagetble.find(item => item.id === id)?.Active?.[0]) || '');
        setEditDialogOpen(true);
    };

    const handleView = (row) => {
        console.log("View clicked for row:", row);
        setSelectedRow(row);
        setViewDialogOpen(true);
    };
    const handleCloseEdit = () => {
        setEditDialogOpen(false);
    };

    const handleCloseView = () => {
        setViewDialogOpen(false);
    };
    const handleInputChange = (event) => {
        setEditedValue(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setEditedValues({ ...editedValues, [editableId]: editedValue });
        setEditDialogOpen(false);
    };


    const shortagetble = [
        {
            id: 1,
            Settlement: "Shortage Claim Finding",
            Active: ["$ 36,230.20"],
			Archived: ['$ 36,230.20'],	
            color: theme.palette.accent.main

        },
        {
            id: 2,
            Settlement: " Start Audit Period",
            Active: ["24/11/23"],
			Archived: ['04/09/22'],

        },
        {
            id: 3,
            Settlement: "End Audit Period",
            Active: ["24/11/23"],
			Archived: ["24/11/23"],
            color: theme.palette.error.main


        },
        {
            id: 4,
            Settlement: "Case ID & Creation Date",
            Active: ['1423658', '24/11/23'],
			Archived: ['1423658', '24/11/23'],

        },
        {
            id: 5,
            Settlement: "Open Balance & Confirmation Date",
            Active: ['$ 36,230.20', '16/06/23'],
			Archived: ['$ 06,230.20', '09/09/23'],
            color: theme.palette.accent.main
        },
        {
            id: 7,
            Settlement: "Settlement Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],
        },
        {
            id: 8,
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],

        },
        {
            id: 9,
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '04/08/23'],
			Archived: ['$ 06,230.20', '04/08/23'],

        },
        {
            id: 10,
            Settlement: "Settlement Amount",
            Active: ["$ 36,230.20"],
			Archived: ['$ 36,230.20'],
            color: theme.palette.success.main

        },

    ];

    return (
        <DashboardCard>
             <Grid container spacing={3} marginBottom={3} alignItems='center' justifyContent='space-between'>
                <Grid item xs={5}><Typography variant='h4'>Shortage Claim Finding </Typography></Grid>
                <Grid item xs={7}>
                    <Grid container spacing={2} justifyContent='end'>
                        <Grid item><ButtonStyled><BoxStyled>Export</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowRight size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                        <Grid item><ButtonStyled><BoxStyled>Import</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowLeft size="16" style={{ margin: 'auto', verticalAlign: 'middle' }} /></BoxStyled></ButtonStyled></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
                        <TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>Settlement</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>Active Cases($)</TableCell>
                        <TableCell style={{ color: 'white', fontSize: '15px', fontWeight: '600' }}>Archived</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shortagetble.map((row,index) => (
                        <TableRowStyled key={row.id}  index={index} theme={theme}>
                            <TableCellStyled>{row.Settlement}</TableCellStyled>
                            <TableCellStyled style={{ color: row.color }}>
                                {row.Active.map((value, index) => (
                                    <Box my={1} style={{ display: 'flex', alignItems: 'center' }}>
                                        {value}
                                        <IconPencil key={index} size={16} style={{ cursor: 'pointer', margin: '0 5px' }} onClick={() => handleEdit(row.id,index)} />
                                        <IconEye size={16} style={{ cursor: 'pointer', margin: '0 5px' }} onClick={() => handleView(row)} />
                                        {row.Settlement === "Shortage Claim Finding" && index === 0 && <Box sx={{ display: 'inline-block', margin: '0 5px' }}>Upload</Box>}
                                    </Box>
                                ))}
                            </TableCellStyled>
                           <TableCellStyled style={{ color: row.color }}>
                                {row.Archived.map((value, index) => (
                                    <Box my={1} style={{ display: 'flex', alignItems: 'center' }}>
                                        {value}
                                    </Box>
                                ))}
                           </TableCellStyled>
                        </TableRowStyled>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={editDialogOpen} onClose={handleCloseEdit}>
                <DialogTitle>Edit Value</DialogTitle>
                <DialogContent>
                    <Input value={editedValue} onChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={viewDialogOpen} onClose={handleCloseView}>
                <DialogTitle>{selectedRow ? selectedRow.Settlement : ''}</DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: theme.palette.primary.light, }}>
                                <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Settlement</TableCell>
                                <TableCell style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>Active Case($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedRow && selectedRow.Active.map((value, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index === 0 ? selectedRow.Settlement : ''}</TableCell>
                                    <TableCell>{value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseView}>Close</Button>
                </DialogActions>
            </Dialog>
        </DashboardCard>
    );
};

export default ShortageClaimTable;