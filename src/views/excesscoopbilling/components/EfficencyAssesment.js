import React from 'react';
import { Typography, Box, Tabs, Tab,styled, Grid, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import DashboardCard from '../../../components/shared/DashboardCard';
import { Stack, textAlign } from '@mui/system';
import { useTheme } from '@emotion/react';


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
    color: theme.palette.text.main, 
    fontSize: '14px', 
    alignItems:'start', 
    padding:'15px 0 15px 15px', 
    fontWeight: '500',
    textAlign: 'left',
    minHeight: 'inherit',
    backgroundColor: theme.palette.bg.main,
    marginBottom: '5px',
    '&.Mui-selected, &:hover': { 
        color: theme.palette.accent.main,
        backgroundColor: theme.palette.accent.light
    }
}));

    return (
        <DashboardCard title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>Efficiency Assessment</Typography>}>
            <Grid container>
                <Grid item sm={4}>
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
                <Grid item sm={8}>
                    <TabPanel value={value} index={0} style={{ borderLeft: '1px solid #eee', marginLeft: '20px'}}>
                        <Typography variant="h5" style={{ color: theme.palette.accent.main }} mb={3}>Shipment Disparity Details</Typography>
                        <Grid container spacing={3} justifyContent="space-between">
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.primary.dark }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ borderLeft: '1px solid #eee', marginLeft: '20px'}}>
                        <Typography variant="h5" style={{ color: theme.palette.accent.main }} mb={3}>Duplicate Freight</Typography>
                        <Grid container spacing={3} justifyContent="space-between">
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.primary.dark }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ borderLeft: '1px solid #eee', marginLeft: '20px'}}>
                        <Typography variant="h5" style={{ color: theme.palette.accent.main }} mb={3}>Non-Compliment Freight</Typography>
                        <Grid container spacing={3} justifyContent="space-between">
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.primary.dark }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={3} style={{ borderLeft: '1px solid #eee', marginLeft: '20px'}}>
                        <Typography variant="h5" style={{ color: theme.palette.accent.main }} mb={3}>Miscellaneous</Typography>
                        <Grid container spacing={3} justifyContent="space-between">
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.primary.dark }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={4} style={{ borderLeft: '1px solid #eee', marginLeft: '20px'}}>
                        <Typography variant="h5" style={{ color: theme.palette.accent.main }} mb={3}>Duplicate Billing</Typography>
                        <Grid container spacing={3} justifyContent="space-between">
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.primary.dark }}>11 Jan 2018</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.text.light }}>To</Typography></Grid>
                            <Grid item><Typography variant='h6' style={{ color: theme.palette.success.dark }}>13 Dec 2021</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,253</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>1,163</Typography></Grid>
                        </Grid>
                        <Box my={1}><Divider /></Box>
                        <Grid container direction="row" spacing="3">
                            <Grid item>
                                <Typography variant='h6' sx={{color: theme.palette.warning.main}}>Sum Identified</Typography>
                            </Grid>
                            <Grid item ml={'auto'}><Typography variant='h6'>11,4047</Typography></Grid>
                        </Grid>
                    </TabPanel>
                </Grid>
            </Grid>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
