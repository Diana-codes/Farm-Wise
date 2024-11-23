// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import HorizontalLinearStepper from 'sections/components-overview/stepper/HorizontalLinearStepper';
import HorizontalNonLinearStepper from 'sections/components-overview/stepper/HorizontalNonLinearStepper';
import VerticalLinearStepper from 'sections/components-overview/stepper/VerticalLinearStepper';
import CarouselEffectStepper from 'sections/components-overview/stepper/CarouselEffectStepper';

// ==============================|| COMPONENTS - STEPPER ||============================== //

export default function ComponentStepper() {
  return (
    <>
      <ComponentHeader
        title="Stepper"
        caption="Steppers convey progress through numbered steps. It provides a wizard-like workflow."
        directory="src/pages/components-overview/stepper"
        link="https://mui.com/material-ui/react-stepper/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Stack spacing={3}>
              <HorizontalLinearStepper />
              <HorizontalNonLinearStepper />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              <VerticalLinearStepper />
              <CarouselEffectStepper />
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </>
  );
}