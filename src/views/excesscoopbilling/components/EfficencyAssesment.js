import React from 'react';
import { Typography, Box, Tabs, Tab,styled } from '@mui/material';
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
    color: '#000', fontSize: '15px', alignItems:'start', padding:'0 0 0 10px', minHeight:'45px', fontWeight:'bolder', '&.Mui-selected': { color: theme.palette.accent.main}
}));

    return (
        <DashboardCard title={
            <Typography variant='h5' sx={{ color: theme.palette.text.dark }}>
                Efficiency Assessment
            </Typography>}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent: 'space-between', height: 224 }}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderColor:'#eee' ,'& .MuiTabs-indicator': { backgroundColor: theme.palette.accent.main, borderWidth: 3, left:0 } }}
                >
                    <TabStyled label="Shippment DisParirty" {...a11yProps(0)}  />
                    <TabStyled label="Duplicate Freight" {...a11yProps(1)}  />
                    <TabStyled label="Non-Compliment Freight" {...a11yProps(2)} />
                    <TabStyled label="Miscellaneous" {...a11yProps(3)} />
                    <TabStyled label="Duplicate Billing" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Box>
                    <Stack direction='row' mb={2}>
                        <Typography variant='h6'>1-Apr-2017 to 31-Oct-2021 </Typography>
                    </Stack>
                    <Stack direction='row' spacing={4}  mb={2} justifyContent="space-between">
                        <Typography variant='h6' sx={{color: theme.palette.success.main}}>Agreements Scanned</Typography>
                        <Typography variant='h6'>3,253</Typography>
                    </Stack>
                    <Stack direction='row' spacing={4} mb={2}  justifyContent="space-between">
                        <Typography variant='h6'  sx={{color: theme.palette.accent.main}}>CoOp Invoices Scanned</Typography>
                        <Typography variant='h6'>1,253</Typography>
                    </Stack>
                    <Stack direction='row' spacing={4} mb={2}  justifyContent="space-between">
                        <Typography variant='h6'  sx={{color: theme.palette.primary.main}}>PO's Scanned</Typography>
                        <Typography variant='h6'>1,163</Typography>
                    </Stack>
                       <Stack direction='row' spacing={4}  justifyContent="space-between">
                        <Typography variant='h6'  sx={{color: theme.palette.secondary.main}}>Sum Identified</Typography>
                        <Typography variant='h6'>11,4047</Typography>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  
                </TabPanel>
                <TabPanel value={value} index={2}>
                    
                </TabPanel>
                <TabPanel value={value} index={3}>
                   
                </TabPanel>
                <TabPanel value={value} index={4}>
                 
                </TabPanel> 
            </Box>
        </DashboardCard>
    );
};

export default EfficencyAssesment;
