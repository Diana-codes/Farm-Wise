'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import Links from '@mui/material/Link';

// project-imports
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import AddCustomer from 'sections/apps/customer/AddCustomer';

import useConfig from 'hooks/useConfig';
import { useIspValue } from 'hooks/useIspValue';
import { useGetMenuMaster } from 'api/menu';

// assets
import { ShoppingCart } from 'iconsax-react';

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, menuOrientation } = useConfig();

  const ispValueAvailable = useIspValue();

  const url = ispValueAvailable ? 'https://1.envato.market/jrEAbP' : 'https://1.envato.market/zNkqj6';


  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 } }}>
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 124px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          {children}
          <Footer />
        </Container>
        {/* <Links style={{ textDecoration: 'none' }} href={url} target="_blank">
          <Button variant="contained" color="error" sx={{ zIndex: 1199, position: 'fixed', bottom: 50, right: 30 }}>
            <ListItemIcon>
              <ShoppingCart color={theme.palette.common.white} />
            </ListItemIcon>
            Buy Now
          </Button>
        </Links> */}
      </Box>
      <AddCustomer />
    </Box>
  );
}

DashboardLayout.propTypes = { children: PropTypes.node };
