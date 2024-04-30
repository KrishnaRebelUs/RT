import React, { useState, useEffect } from 'react';
import { Box, Stack, styled, Avatar, useTheme, Typography } from '@mui/material';
import { IconClock, IconBriefcase, IconCurrencyDollar } from '@tabler/icons-react';

const NumberData = (props) => {
  const { data } = props;
  const [iconComponents, setIconComponents] = useState([]);
  const theme = useTheme();

  const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    borderRadius: '7px',
    width: '32px',
    height: '32px',
    '& svg': {
      color: theme.palette.primary.contrastText,
      width: '22px',
      height: '22px'
    }
  }));

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons = await Promise.all(
        data.map(async (section) => {
          switch (section.icon) {
            case 'IconClock':
              return IconClock;
            case 'IconBriefcase':
              return IconBriefcase;
            case 'IconCurrencyDollar':
              return IconCurrencyDollar;
            default:
              return null;
          }
        })
      );
      setIconComponents(loadedIcons);
    };

    loadIcons();
  }, [data]);

  return (
    <Box>
      <Stack direction='column' marginTop={3}>
        {data.map((section, index) => (
          <React.Fragment key={index}>
            <Stack direction='row' spacing={4} alignItems="center" justifyContent="space-between" marginBottom={2}>
              <Stack direction='row' spacing={1} alignItems="center" marginBottom={2}>
              <AvatarStyled style={{ backgroundColor: section.avatarBackgroundColor || theme.palette.success.main }}>
                {iconComponents[index] && React.createElement(iconComponents[index])}
              </AvatarStyled>
                <Box>
                  <Typography variant='h6' style={{ color: theme.palette.secondary.main }}>{section.body}</Typography>
                </Box>
              </Stack>
              <Typography variant='h6' style={{ color: section.numberColor || theme.palette.success.main }}>
                {section.number}
              </Typography>

            </Stack>
            <Box mb={2}></Box>
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default NumberData;
