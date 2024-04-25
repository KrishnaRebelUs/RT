import { Box, Stack, styled,Avatar,useTheme,Typography, Divider} from '@mui/material';
import {IconClock, IconBriefcase, IconCurrencyDollar } from '@tabler/icons-react';
import React from 'react'

const NumberData= () => {
  const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: '7px',
    width: '32px',
    height: '32px',
   '& svg':{
      color:theme.palette.primary.contrastText,
      width: '22px',
      height: '22px'
    }

    }));
    const theme = useTheme();
  return (
	<Box>
	   <Stack direction='column'marginTop={3}>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row' spacing={2} alignItems="center" marginBottom={2}>
            <AvatarStyled>
                <IconClock />
            </AvatarStyled>
            <Box>
              <Typography variant='h6'>Hour Saved</Typography>
            </Box>
          </Stack>
          <Typography variant='h6' style={{ color: theme.palette.success.main }}>18 h</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.accent.main }}>
              <IconBriefcase/>
            </AvatarStyled>
            <Box>
              <Typography variant='h6'>Resources Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h6' style={{ color: theme.palette.accent.main }}>496</Typography>
        </Stack>
        <Box mb={2} ><Divider /></Box>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled style={{ backgroundColor: theme.palette.primary.light }}>
              <IconCurrencyDollar />
            </AvatarStyled>
            <Box>
              <Typography variant='h6'>Amount Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h6' style={{ color: theme.palette.primary.light }}>${new Intl.NumberFormat().format(57423)}</Typography>
        </Stack>       
      </Stack>    
	</Box>
  )
}

export default NumberData;
