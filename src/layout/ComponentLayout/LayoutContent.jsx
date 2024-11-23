'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// project-imports
import { useGetMenuMaster } from 'api/menu';

// component content
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  minHeight: `calc(100vh - 180px)`,
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0
  },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

// ==============================|| COMPONENTS LAYOUT ||============================== //

export default function LayoutContent({ children }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const { menuMaster } = useGetMenuMaster();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

}

LayoutContent.propTypes = { children: PropTypes.node };
