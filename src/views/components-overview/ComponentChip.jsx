'use client';
import { useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';

// assets
import { EmojiHappy, Heart, MinusSquare, PlayCircle, Trash } from 'iconsax-react';

const avatar = '/assets/images/users/avatar-1.png';
const avatarDark = '/assets/images/users/avatar-6.png';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5)
}));

ListItem.displayName = 'ListItem';

// ==============================|| COMPONENTS - CHIPS ||============================== //

export default function ComponentChip() {
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const basicChipCodeString = `<Chip label="Default" />
<Chip label="Color" color="primary" />
<Chip label="Disabled" color="primary" disabled />
<Chip label="Clickable" color="primary" onClick={() => {}} />
<Chip label="Deletable" color="primary" onDelete={() => {}} />
<Chip avatar={<Avatar alt="Natacha" src={avatar} />} label="Avatar" color="primary" />`;

  const outlinedChipCodeString = `<Chip label="Default" variant="outlined" />
<Chip label="Color" variant="outlined" color="primary" />
<Chip label="Disabled" variant="outlined" color="primary" disabled />
<Chip label="Clickable" variant="outlined" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="outlined" color="primary" onDelete={() => {}} />
<Chip
  variant="outlined"
  avatar={<Avatar alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`;

  const lighterChipCodeString = `<Chip label="Default" variant="light" />
<Chip label="Color" variant="light" color="primary" />
<Chip label="Disabled" variant="light" color="primary" disabled />
<Chip label="Clickable" variant="light" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="light" color="primary" onDelete={() => {}} />
<Chip
  variant="light"
  avatar={<Avatar alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`;

  const combineChipCodeString = `<Chip label="Default" variant="combined" />
<Chip label="Color" variant="combined" color="primary" />
<Chip label="Disabled" variant="combined" color="primary" disabled />
<Chip label="Clickable" variant="combined" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="combined" color="primary" onDelete={() => {}} />
<Chip
  variant="combined"
  avatar={<Avatar alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`;

  const deleteChipCodeString = `<Chip label="Default" onDelete={() => {}} color="error" />
<Chip
  label="Custom Icon"
  onDelete={() => {}}
  color="error"
  deleteIcon={<MinusSquare style={{ fontSize: '1.15rem' }} />}
/>
<Chip
  variant="outlined"
  label="Custom Icon"
  onDelete={() => {}}
  color="error"
  deleteIcon={<Trash style={{ fontSize: '1.15rem' }} />}
/>`;

  const avatarChipCodeString = `<Chip color="secondary" variant="light" icon={<PlayCircle />} label="Play" />
<Chip
  variant="combined"
  color="primary"
  avatar={<Avatar alt="Natacha" src={avatarDark} />}
  label="Avatar"
/>
<Chip color="warning" variant="outlined" icon={<EmojiHappy variant="Bold" />} label="Smile" />
<Chip icon={<Heart variant="Bold" />} color="error" label="Like" />`;

  const sizeChipCodeString = `<Chip color="primary" label="Small" size="small" />
<Chip color="primary" label="Default" />
<Chip color="primary" label="Large" size="large" />`;

  const arrayChipCodeString = `<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    border: '1px solid',
    borderColor: theme.palette.secondary.light,
    borderRadius: 1,
    p: 0.5,
    m: 0
  }}
  component="ul"
>
  {chipData.map((data) => (
    <ListItem key={data.key}>
      <Chip
        size="small"
        variant="combined"
        label={data.label}
        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
      />
    </ListItem>
  ))}
</Box>`;

  const colorChipCodeString = `<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Info" color="info" />
<Chip label="Error" color="error" />`;

  return (
    <>
      <ComponentHeader
        title="Chips"
        caption="Chips are compact elements that represent an input, attribute, or action."
        directory="src/pages/components-overview/chips"
        link="https://mui.com/material-ui/react-chip/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic" codeHighlight codeString={basicChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Default" />
                </Grid>
                <Grid item>
                  <Chip label="Color" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Disabled" color="primary" disabled />
                </Grid>
                <Grid item>
                  <Chip label="Clickable" color="primary" onClick={() => {}} />
                </Grid>
                <Grid item>
                  <Chip label="Deletable" color="primary" onDelete={() => {}} />
                </Grid>
                <Grid item>
                  <Chip avatar={<Avatar alt="Natacha" src={avatar} />} label="Avatar" color="primary" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Outlined" codeString={outlinedChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Default" variant="outlined" />
                </Grid>
                <Grid item>
                  <Chip label="Color" variant="outlined" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Disabled" variant="outlined" color="primary" disabled />
                </Grid>
                <Grid item>
                  <Chip label="Clickable" variant="outlined" color="primary" onClick={() => {}} />
                </Grid>
                <Grid item>
                  <Chip label="Deletable" variant="outlined" color="primary" onDelete={() => {}} />
                </Grid>
                <Grid item>
                  <Chip variant="outlined" avatar={<Avatar alt="Natacha" src={avatarDark} />} label="Avatar" color="primary" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Lighter" codeString={lighterChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Default" variant="light" />
                </Grid>
                <Grid item>
                  <Chip label="Color" variant="light" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Disabled" variant="light" color="primary" disabled />
                </Grid>
                <Grid item>
                  <Chip label="Clickable" variant="light" color="primary" onClick={() => {}} />
                </Grid>
                <Grid item>
                  <Chip label="Deletable" variant="light" color="primary" onDelete={() => {}} />
                </Grid>
                <Grid item>
                  <Chip variant="light" avatar={<Avatar alt="Natacha" src={avatarDark} />} label="Avatar" color="primary" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Combined" codeString={combineChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Default" variant="combined" />
                </Grid>
                <Grid item>
                  <Chip label="Color" variant="combined" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Disabled" variant="combined" color="primary" disabled />
                </Grid>
                <Grid item>
                  <Chip label="Clickable" variant="combined" color="primary" onClick={() => {}} />
                </Grid>
                <Grid item>
                  <Chip label="Deletable" variant="combined" color="primary" onDelete={() => {}} />
                </Grid>
                <Grid item>
                  <Chip variant="combined" avatar={<Avatar alt="Natacha" src={avatarDark} />} label="Avatar" color="primary" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MainCard title="Deletable Icon" codeString={deleteChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Default" onDelete={() => {}} color="error" />
                </Grid>
                <Grid item>
                  <Chip label="Custom Icon" onDelete={() => {}} color="error" deleteIcon={<MinusSquare />} />
                </Grid>
                <Grid item>
                  <Chip variant="outlined" label="Custom Icon" onDelete={() => {}} color="error" deleteIcon={<Trash variant="Bold" />} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Avatar & Icon" codeString={avatarChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip color="secondary" variant="light" icon={<PlayCircle />} label="Play" />
                </Grid>
                <Grid item>
                  <Chip variant="combined" color="primary" avatar={<Avatar alt="Natacha" src={avatarDark} />} label="Avatar" />
                </Grid>
                <Grid item>
                  <Chip color="warning" variant="outlined" icon={<EmojiHappy variant="Bold" />} label="Smile" />
                </Grid>
                <Grid item>
                  <Chip icon={<Heart variant="Bold" />} color="error" label="Like" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Size" codeString={sizeChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip color="primary" label="Small" size="small" />
                </Grid>
                <Grid item>
                  <Chip color="primary" label="Default" />
                </Grid>
                <Grid item>
                  <Chip color="primary" label="Large" size="large" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Array" codeString={arrayChipCodeString}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  border: '1px solid',
                  borderColor: 'secondary.light',
                  borderRadius: 1,
                  p: 0.5,
                  m: 0
                }}
                component="ul"
              >
                {chipData.map((data) => (
                  <ListItem key={data.key}>
                    <Chip
                      size="small"
                      variant="combined"
                      label={data.label}
                      onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                    />
                  </ListItem>
                ))}
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Color" codeString={colorChipCodeString}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip label="Primary" color="primary" />
                </Grid>
                <Grid item>
                  <Chip label="Secondary" color="secondary" sx={{ color: 'secondary.lighter' }} />
                </Grid>
                <Grid item>
                  <Chip label="Success" color="success" />
                </Grid>
                <Grid item>
                  <Chip label="Warning" color="warning" />
                </Grid>
                <Grid item>
                  <Chip label="Info" color="info" />
                </Grid>
                <Grid item>
                  <Chip label="Error" color="error" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </>
  );
}
