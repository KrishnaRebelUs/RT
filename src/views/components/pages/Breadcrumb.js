import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { IconLayoutDashboard } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const Breadcrumb = ({ titles }) => {
  const theme = useTheme();

  return (
    <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
      <Link
        underline="hover"
        to="/dashboard" 
        alignItems="center"
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: theme.palette.text.dark,
          '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.main
          }
        }}
      >
        <IconLayoutDashboard size="21" style={{ paddingRight: '5px' }} />
        Dashboard
      </Link>
      {titles.map((title, index) => (
        <Typography
          key={index}
          sx={{ display: 'flex', alignItems: 'center' }}
          className={index === titles.length - 1 ? "active" : ""}
          color="#000"
        >
          {index === titles.length - 1 ? (
            title
          ) : (
            <Link
              underline="none"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.dark"
              to={`/${title.replace(/\s+/g, '-').toLowerCase()}`} // Convert spaces to dashes and lowercase
              style={{
                textDecoration: 'none',
                '&:hover, &:focus': {
                  textDecoration: 'underline',
                  color: theme.palette.primary.main
                }
              }}
            >
              {title}
            </Link>
          )}
        </Typography>
      ))}
   
    </Breadcrumbs>
  );
};

export default Breadcrumb;
