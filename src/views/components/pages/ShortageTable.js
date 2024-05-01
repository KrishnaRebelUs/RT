import React ,{useState} from 'react';
import {Typography,styled, Paper, Table, TableBody, TableCell, Button, TableHead, TableRow } from '@mui/material';
import { useTheme } from '@emotion/react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {IconPencil} from '@tabler/icons-react';

const ShortageTable = () => {
    const theme = useTheme();
    const [editable, setEditable] = useState(false); 
    const [shortagetble, setShortageTable] = useState([
        {
            id:1,
           Settlement: "Shortage Claim Finding",
           Active: ["$ 36,230.20"],
           Archieved: ["$ 36,230.20"],
           color: theme.palette.accent.main
        
        },
        {
            id:2,
            Settlement: " Start Audit Period",
            Active: ["11/24/23"],
            Archieved: ["9/04/22"],
            
         
         },
         {
            id:3,
            Settlement: "End Audit Period",
            Active:["11/24/23"],
            Archieved: ["11/24/23"],
            color: theme.palette.error.main
            
         
         },
         {
            id:4,
            Settlement: "Case ID and Creation Date",
            Active: ['1423658', '11/24/23'],
            Archieved: ['1423658', '11/24/23'],
         
         },
         {
            id:5,
            Settlement: "Open Balance",
            Active:["$ 36,230.20"],
            Archieved: ["$ 36,230.20"],
            color: theme.palette.accent.main
         },
        
          {
            id:6,
            Settlement: "Confirmation Date",
            Active:["06/16/23"],
            Archieved: ["09/09/23"],
         
         },
         {
            id:7,
             Settlement: "Settlement Offer",
             Active: ['$ 36,230.20', '08/04/23'],
             Archieved: ['$ 36,230.20', '08/04/23'],
          
          },
          {
            id:8,
            Settlement: "Counter Offer",
            Active: ['$ 36,230.20', '08/04/23'],
            Archieved: ['$ 36,230.20', '08/04/23'],
         
         },
         {
            id:9,
            Settlement: "Accepted Offer",
            Active: ['$ 36,230.20', '08/04/23'],
            Archieved: ['$ 36,230.20', '08/04/23'],
         
         },
          {
            id:10,
            Settlement: "Settlement Amount",
            Active:["$ 36,230.20"],
            Archieved: ["$ 36,230.20"],
            color:theme.palette.success.main
         
         },
    ]);

    const toggleEditable = () => {
        setEditable(!editable);
    };
    const handleActiveEdit = (row, newValue) => {
        const updatedTable = shortagetble.map(item => {
            if (item.id === row.id) {
                return { ...item, Active: newValue };
            }
            return item;
        });
        setShortageTable(updatedTable);
    };
    const handleSave = () => {

        toggleEditable(); 
    };

    const TableHeadStyled = styled(TableHead)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }));
    const TableCellStyled = styled(TableCell)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontWeight: '600',
        fontSize:'16px'

    }));
    const TableRowStyled = styled(TableRow)(({ theme }) => ({
        borderBottom:'1px solid #ccc',
        fontWeight: '600',
        fontSize:'16px'

    }));
    const ButtonStyled = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.primary.contrast,
		border: '1px solid',
		borderColor: theme.palette.primary.contrast,
		color: theme.palette.primary.contrastText,
		fontSize: '12px',
		padding: '5px 12px',
		fontWeight: '600',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color:theme.palette.primary.contrastText,
			borderColor:theme.palette.primary.main
		},
	}));



    return (
       
        <DashboardCard title={<Typography variant='h4'> Shortage Claim Finding </Typography>} action={
            editable ? (
                <ButtonStyled onClick={handleSave}>Save</ButtonStyled>
            ) : (
                <ButtonStyled onClick={toggleEditable}>Edit <IconPencil size='16' style={{ marginLeft: '5px' }} /></ButtonStyled>
            )
        }>
            <Table>
                <TableHeadStyled>
                    <TableRow>
                        <TableCellStyled>Settlement</TableCellStyled>
                        <TableCellStyled>Active Cases ($)</TableCellStyled>
                        <TableCellStyled>Archived</TableCellStyled>
                    </TableRow>
                </TableHeadStyled>
                <TableBody>
                    {shortagetble.map((row) => (
                        <TableRowStyled key={row.id}>
                            <TableCell fontWeight={600} sx={{color:theme.palette.primary.main, fontSize:'14px'}}>{row.Settlement}</TableCell>
                            <TableCell fontWeight={600}  sx={{color:theme.palette.text.dark, fontSize:'14px'}}  style={{ color: row.color }}>
                                    {editable ? (
                                        <input
                                            type="text"
                                            value={row.Active}
                                            onChange={(e) => handleActiveEdit(row, e.target.value)}
                                        />
                                    ) : (
                                        <>
                                            {Array.isArray(row.Active) ? (
                                                row.Active.map((data, index) => (
                                                    <Typography key={index}>{data}</Typography>
                                                ))
                                            ) : (
                                                <Typography>{row.Active}</Typography>
                                            )}
                                        </>
                                    )}
                                </TableCell>
                        <TableCell fontWeight={600}  sx={{color:theme.palette.text.dark, fontSize:'14px'}}  style={{ color: row.color }}>               {row.Archieved.map((data, index) => (
                                            <Typography key={index}>{data}</Typography>
                                        ))}</TableCell> 
                        </TableRowStyled>
                    ))}
                </TableBody>
            </Table>
        </DashboardCard>
    );
};

export default ShortageTable;
