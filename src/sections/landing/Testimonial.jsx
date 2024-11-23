'use client';
import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';

// assets
import Avatar from 'components/@extended/Avatar';
const Avatar1 = '/assets/images/users/avatar-6.png';
const Avatar2 = '/assets/images/users/avatar-1.png';
const Avatar3 = '/assets/images/users/avatar-2.png';
const Avatar4 = '/assets/images/users/avatar-3.png';
const Avatar5 = '/assets/images/users/avatar-4.png';
const Avatar6 = '/assets/images/users/avatar-5.png';
const Avatar7 = '/assets/images/users/avatar-7.png';
const Avatar8 = '/assets/images/users/avatar-8.png';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }) {
  return (
    <MainCard sx={{ width: { xs: '300px', md: '420px' }, cursor: 'pointer', my: 0.2, mx: 1.5 }}>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        <Avatar alt="Avatar" size="lg" src={item.image}></Avatar>
        <Stack>
          <Typography>{item.text}</Typography>
          <Typography>
            <small>{item.name}</small> -{' '}
            <Box component="span" color="text.secondary">
              {item.designation}
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

// ==============================|| LANDING - TestimonialPage ||============================== //

export default function TestimonialPage() {
  const items = [
    { image: Avatar1,
      text: '“FarmWise has made my farming process so much easier and efficient!“',
      name: 'Jean Paul',
      designation: 'Musanze District Farmer'
    },
    {
      image: Avatar2,
      text: '“FarmWise’s offline access feature is a lifesaver in rural areas with limited internet. Thank you! 😍“',
      name: 'Emmanuel Mugisha',
      designation: 'Nyamasheke Farmer'
    },
  {
    image: Avatar3,
    text: '“FarmWise’s offline access feature is a lifesaver in rural areas with limited internet. Thank you! 😍“',
    name: 'Emmanuel Mugisha',
    designation: 'Nyamasheke Farmer'
  },
  // Testimonial 4: Praise for customer support and responsiveness
  {
    image: Avatar4,
    text: '“The support team is amazing—they guided me through setting up my FarmWise account quickly!“',
    name: 'Grace Mukankuranga',
    designation: 'Cooperative Member in Huye'
  },
  // Testimonial 5: Feedback on the market access feature
  {
    image: Avatar5,
    text: '“I was able to sell my produce at better prices after connecting with buyers through FarmWise. 😍 “',
    name: 'Samuel Ndayishimiye',
    designation: 'Farmer and Trader'
  },
  // Testimonial 6: General feedback on the platform's functionality
  {
    image: Avatar6,
    text: '“FarmWise is a total package for farmers. From weather updates to market access—it’s all there! 💎“',
    name: 'Jacqueline Nibagwire',
    designation: 'Farmer in Gicumbi'
  },
  // Testimonial 7: Additional feedback on customer support
  {
    image: Avatar7,
    text: '“The team is always ready to help whenever I have an issue. I love FarmWise!“',
    name: 'Eric Byiringiro',
    designation: 'Ruhango Farmer'
  },
  // Testimonial 8: Appreciation for comprehensive features
  {
    image: Avatar8,
    text: '“FarmWise combines everything I need as a farmer: advice, weather, and market access. Perfect! 💎“',
    name: 'Alice Imanishimwe',
    designation: 'Local Farmer in Bugesera'
  }
];
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2">
                  Farmers{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    love{' '}
                  </Box>{' '}
                  FarmWise Rwanda, Now It's Your Turn to Thrive! 🌾
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                At FarmWise Rwanda, we take pride in empowering farmers with tools and insights tailored to their needs. 
                Consistently praised for its ease of use and impactful features, FarmWise has become a trusted partner for 
                farmers across Rwanda. Join the growing community of farmers transforming their lives with FarmWise!
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction="right" gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

Item.propTypes = { item: PropTypes.object };
