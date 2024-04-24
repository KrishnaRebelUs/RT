import { Box, Stack, styled,Avatar,useTheme,Typography} from '@mui/material';
import {IconClock,IconBriefcase, IconCoinPound} from '@tabler/icons-react';
import React from 'react'

const NumberData= () => {
  const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: '7px',
   '& svg':{
      color:theme.palette.primary.contrastText,
    }

    }));
    const theme = useTheme();
  return (
	<Box>
	   <Stack direction='column'marginTop={3}>
          <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row' spacing={2} alignItems="center" marginBottom={2}>
            <AvatarStyled sizes='21'>
                <IconClock />
            </AvatarStyled>
            <Box>
              <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h6' className='card-text text-dark'>18</Typography>
        </Stack>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled sizes='21'>
              <IconBriefcase />
            </AvatarStyled>
            <Box>
              <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h6' className='card-text text-dark'>18</Typography>
        </Stack>
        <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between"  marginBottom={2}>
          <Stack direction='row'spacing={2} alignItems="center">
            <AvatarStyled sizes='21'>
              <IconCoinPound />
            </AvatarStyled>
            <Box>
              <Typography variant='h6' className='card-text text-dark'>Money Saved</Typography>
            </Box>
          </Stack>
          <Typography  variant='h6' className='card-text text-dark'>18</Typography>
        </Stack>       
     </Stack>    
	</Box>
  )
}

export default NumberData;
