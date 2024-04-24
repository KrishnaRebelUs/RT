import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { IconLayoutDashboard } from '@tabler/icons-react';

const Breadcrumb = ({ titles }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', cursor:'pointer' }}
        color="inherit"
        to="/"
      >
        <IconLayoutDashboard size="21" style={{ paddingRight: '5px' }} />
        Dashboard
      </Link>
      {titles.map((title, index) => (
        <Typography
          key={index}
          sx={{ display: 'flex', alignItems: 'center' }}
          className={index === titles.length - 1 ? "active" : ""}
          color="inherit"
        >
          {index === titles.length - 1 ? (
            title
          ) : (
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.dark"
              href="/"
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
