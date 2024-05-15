import React, { useState } from 'react';
import { Box, Grid, Tab, Typography,Stack,  TableCell, TableHead, TableRow, useTheme,styled , Button} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DataTable from 'react-data-table-component';
import {IconFileArrowRight,IconFileArrowLeft} from '@tabler/icons-react';
import '../../../theme/TableStyle.css'
import moment from 'moment';


const TabStyled = styled(Tab)(({ theme}) => ({
    fontWeight: '600',
    fontSize: '16px',
    padding: 0
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrast,
    border: '1px solid',
    borderColor: theme.palette.primary.contrast,
    color: theme.palette.primary.contrastText,
    fontSize: '15px',
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
const CustomProgressBar = styled(Box)(({ theme }) => ({
    height: '5px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'

}));
const ProgressLight = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: '7px'
}));
const ProgressDark = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: '7px'
}));
const ProgressText = styled(Box)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: '500',
}));
const ProgressLabel = styled(Box)(({ theme }) => ({
    width: '42px',
    height: '22px', 
    textAlign: 'center', 
    borderRadius: '7px', 
    position: 'absolute',
    right: '60px',
    bottom: '15px', 
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    'span': {
        content:'""',
        position:'absolute',
        bottom:'-3px',
        border: '3px solid',
        transform:'rotate(45deg)',
        right:'calc(50% - 3px)'
    }
}));
const BoxStyled = styled(Box)(({ theme }) => ({
   
    padding: '5px 12px',
    fontWeight: '600',
}));

export const ExportCSVBTN = () => {

	return (
		<ButtonStyled variant="contained" color="primary">Export <Box style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}><IconFileArrowRight width="20" /></Box></ButtonStyled>
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
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.secondary.main }}>{row.DisputeID}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeType',
            selector: row => row.DisputeType,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.accent.main }}>{row.DisputeType}</Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeDate',
            selector: row => row.DisputeType,
            sortable: true,
            cell: (row, index, column, id) => {
                return (
                    <Box>
                        <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.secondary.main }}>
                            {moment(row.DisputeDate).format('MM/DD/YY')}
                        </Typography>
                    </Box>
                );
            }
        },
        {
            name: 'DisputeStatus',
            selector: row => row.DisputeStatus,
            sortable: true,
            cell: (row, index, column, id) => {
                if (row.DisputeStatus === 'Resolved') {
                    return (
                        <Box>
                            <Typography variant='body1' fontWeight='500' fontSize='14px' style={{ color: theme.palette.success.main }}>{row.DisputeStatus}</Typography>
                        </Box>
                    );
                } else {
                    return (
                        <Box>
                            <Typography variant='body2' style={{ color: 'red' }}>{row.DisputeStatus}</Typography>
                        </Box>
                    );
                }
            }
        },
        {
            name: 'DisputeAmount',
            selector: row => row.DisputeAmount,
            sortable: true,
        },
        {
            name: 'ApprovedAmount (As Per Vc)',
            selector: row => row.ApprovedAmount,
            sortable: true,
        },
    ];
    
    const data = [
        {
            DisputeID: "DSPT10021849951",
            DisputeType: "Shortage",
            DisputeDate: "03/06/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$229.40",
            ApprovedAmount: "$143.64",
        },
        {
            DisputeID: "DSPT10021849489",
            DisputeType: "Shortage",
            DisputeDate: "04/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$329.40",
            ApprovedAmount: "$3,324.01",
        },
        {
            DisputeID: "DSPT10021849999",
            DisputeType: "Shortage",
            DisputeDate: "09/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$529.40",
            ApprovedAmount: "$173.64",
        },
        {
            DisputeID: "DSPT10021849852",
            DisputeType: "Shortage",
            DisputeDate: "05/06/23",
            DisputeStatus: "Pending Amazon Action",
            DisputeAmount: "$829.40",
            ApprovedAmount: "$173.64",
        },
        {
            DisputeID: "DSPT10021849202",
            DisputeType: "Shortage",
            DisputeDate: "03/08/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$229.40",
            ApprovedAmount: "$243.64",
        },
        {
            DisputeID: "DSPT10021849001",
            DisputeType: "Shortage",
            DisputeDate: "08/02/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$129.40",
            ApprovedAmount: "$1043.64",
        },
        {
            DisputeID: "DSPT12011504991",
            DisputeType: "Shortage",
            DisputeDate: "01/01/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$329.40",
            ApprovedAmount: "$183.64",
        },
        {
            DisputeID: "DSPT12011504991",
            DisputeType: "Shortage",
            DisputeDate: "03/06/23",
            DisputeStatus: "Resolved",
            DisputeAmount: "$ 429.40",
            ApprovedAmount: "$193.64",
        }
    ];

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value} className="table-tabs">
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{display:'flex',justifyContent: "space-between", marginBottom:'20px', alignItems:'center', borderBottom:'0'}}>
                                <TabList onChange={handleChange} indicatorColor="secondary" className='finops-tab' style={{overflow:'visible'}}>
                                    <TabStyled label="Approved" value="1"  style={{color:theme.palette.text.dark}}/>
                                    <TabStyled label="Denied" value="2" />
                                    <TabStyled label="Pending" value="3" />
                                    <TabStyled label="All" value="4" />
                                </TabList>
                            <Grid container spacing={1}  justifyContent='end' alignItems="end">
                                <Grid><ProgressText style={{ color: theme.palette.success.main }}>Win Rate</ProgressText></Grid>
                                <Grid item xs={4}style={{paddingTop:'0'}}>
                                    <Box style={{ width: '100%'}} mx={'auto'}>
                                        <CustomProgressBar width="66%">
                                            <ProgressLabel style={{ backgroundColor: theme.palette.success.main }}>66% <Box component="span" style={{ borderColor: theme.palette.success.main }}></Box></ProgressLabel>
                                            <ProgressDark style={{ backgroundColor: theme.palette.success.main }}></ProgressDark>
                                            <ProgressLight style={{ backgroundColor: theme.palette.success.light }}></ProgressLight>
                                           
                                        </CustomProgressBar>
                                         
                                    </Box>
                                </Grid>
                                <Grid item style={{paddingTop:'0'}}>
                                    <Stack direction='row' spacing={2} style={{marginTop:'16px'}}>
                                            <ButtonStyled><BoxStyled>Import</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowLeft size="18" style={{margin:'auto', verticalAlign:'middle'}}/></BoxStyled></ButtonStyled>
                                            <ButtonStyled><BoxStyled>Export</BoxStyled> <span className='btn-indicator'></span> <BoxStyled><IconFileArrowRight size="18" style={{margin:'auto', verticalAlign:'middle'}}/></BoxStyled></ButtonStyled>
                                        </Stack>
                                </Grid>
                            </Grid>

                            </Box>
                            <TabPanel value="1" style={{ padding: 0 }}>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    // actions={<ImportCSVBTN />}
                                    // actions={<ExportCSVBTN />}
                                />
                            </TabPanel>
                            <TabPanel value="2" style={{ padding: 0 }}>
                            <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    // actions={<ExportCSVBTN />}
                                />
                            </TabPanel>
                            <TabPanel value="3" style={{ padding: 0 }}>
                            <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    // actions={<ExportCSVBTN />}
                                />
                            </TabPanel>
                            <TabPanel value="4" style={{ padding: 0 }}>
                            <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    // actions={<ExportCSVBTN />}
                                />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
    </Box>
    );
};

export default FinopsTable;
