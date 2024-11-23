import PropTypes from 'prop-types';
// import logoImage from 'assets/images/FWR-logo2.png';
// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();
  return (
    <img 
      src="/assets/images/FWR-logo2.png" 
      alt="Logo" 
      style={{ width: '100px', height: 'auto' }} 
    />
  );
}

LogoMain.propTypes = { reverse: PropTypes.bool };
