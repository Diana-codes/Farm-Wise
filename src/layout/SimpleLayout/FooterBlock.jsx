import PropTypes from 'prop-types';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';

// project-imports
import Logo from 'components/logo';

// assets
import { Dribbble, Facebook, Link2, Youtube, Xrp } from 'iconsax-react';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

export default function FooterBlock({ isFull }) {
  const theme = useTheme();

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={4}>
            {/* Column 1: About FarmWise Rwanda */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 320 }}>
                      FarmWise Rwanda has earned the trust of farmers across the country by providing reliable, farmer-centric solutions.
                      Our dedicated team works tirelessly to deliver tools that empower farmers to succeed, from localized weather updates
                      to market access and crop advisory services.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
  
            {/* Column 2: Quick Links */}
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h5">Quick Links</Typography>
                <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                  <FooterLink href="/404" underline="none">
                    Home
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    About Us
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    Services
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    Contact
                  </FooterLink>
                </Stack>
              </Stack>
            </Grid>
  
            {/* Column 3: Help & Support */}
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h5">Help & Support</Typography>
                <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                  <FooterLink href="/404" underline="none">
                    FAQ
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    Privacy Policy
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    Terms of Service
                  </FooterLink>
                  <FooterLink href="/404" underline="none">
                    Support
                  </FooterLink>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
  
      <Box
        sx={{
          py: 2.4,
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: 'secondary.200'
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="center">
            {/* Left Footer */}
            <Grid item xs={12} sm={8}>
              <Typography>
                © Created By{' '}
                <Link href="/404" underline="none">
                  Diana Ruzindana
                </Link>
              </Typography>
            </Grid>
            {/* Right Footer: Social Icons */}
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Tooltip title="Linkedin">
                    <Link2 variant="Bold" size={24} />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Twitter">
                    <Xrp variant="Bold" size={16} />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Facebook">
                    <Facebook variant="Bold" size={20} />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  
  
}

FooterBlock.propTypes = { isFull: PropTypes.bool };
