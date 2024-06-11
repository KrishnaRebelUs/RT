import React from 'react';
import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { IconLayoutDashboard } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Breadcrumb = ({ titles = [] }) => { 
  const theme = useTheme();

  return (
    <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
      <Link
        to="/dashboard"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: theme.palette.text.dark,
        }}
      >
        <IconLayoutDashboard size="21" style={{ paddingRight: '5px' }} />
        Dashboard
      </Link>
      {titles.map((title, index) => (
        <Typography
          key={index}
          color={index === titles.length - 1 ? "textPrimary" : "inherit"}
          style={{ display: 'flex', alignItems: 'center', color: theme.palette.primary.main, fontSize:'1rem'}}
        >
          {index === titles.length - 1 ? (
            title
          ) : (
            <Link
              to={`/${title.replace(/\s+/g, '-').toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: theme.palette.text.dark,
                display: 'flex',
                alignItems: 'center',
                '&:hover, &:focus': {
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
