import React from 'react';
import { Typography, Box, Tabs, Tab,styled, Grid, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import DashboardCard from '../../../components/shared/DashboardCard';
import { Stack, textAlign } from '@mui/system';
import { useTheme } from '@emotion/react';
import moment from 'moment';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const EfficencyAssesment = () => {
const theme = useTheme();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};
const TabStyled = styled(Tab)(({ theme }) => ({
    color: theme.palette.text.light, 
    fontSize: '12px', 
    alignItems: 'start', 
    padding: '15px 10px',
    fontWeight: '500', 
    minHeight: 'inherit',
    backgroundColor: theme.palette.bg.main,
    marginBottom: '5px',
    textAlign: 'left',
    '&.Mui-selected': { 
        color: theme.palette.accent.main,
        backgroundColor: theme.palette.accent.light
    }
}));

    return (
        <DashboardCard title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>
                Efficiency Assessment
            </Typography>}>
            <Grid container spacing={2}>
                <Grid item md={5}>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        sx={{ borderColor:'#eee' ,'& .MuiTabs-indicator': { backgroundColor: theme.palette.accent.main, borderWidth: 3, left:0 } }}
                    >
                        <TabStyled label="Shipment Disparity" {...a11yProps(0)}  />
                        <TabStyled label="Duplicate Freight" {...a11yProps(1)}  />
                        <TabStyled label="Non-Compliment Freight" {...a11yProps(2)} />
                        <TabStyled label="Miscellaneous" {...a11yProps(3)} />
                        <TabStyled label="Duplicate Billing" {...a11yProps(4)} />
                    </Tabs>
                </Grid>
                <Grid item md={7}>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ color: theme.palette.accent.main}}>Shipment Disparity</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.accent.main }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>11,4047</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ color: theme.palette.accent.main}}>Duplicate Freight</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.accent.main }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>11,4047</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ color: theme.palette.accent.main}}>Non-Compliment Freight</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.accent.main }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>11,4047</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ color: theme.palette.accent.main}}>Miscellaneous</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.accent.main }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>11,4047</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{ color: theme.palette.accent.main}}>Duplicate Billing</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.accent.main }}> {moment('11 Jan 2018').format('MM/DD/YY')}</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                                    <Grid item><Typography variant='body2' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>3,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,253</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>1,163</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} my={2}><Divider /></Grid>
                                <Grid container justifyContent={'space-between'} spacing="3">
                                    <Grid item>
                                        <Typography variant='body2'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body2'>11,4047</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Grid>
            </Grid>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
