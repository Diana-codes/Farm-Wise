'use client';

import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import { APP_DEFAULT_PATH } from 'config';

// ==============================|| INVOICE - DASHBOARD ||============================== //

export default function IncoiceDashboard() {
  const theme = useTheme();
  const [activeChart, setActiveChart] = useState(0);


  const [series, setSeries] = useState([
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
    }
  ]);

  const handleSeries = (index) => {
    setActiveChart(index);
    switch (index) {
      case 1:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [10, 15, 8, 12, 11, 7, 10, 13, 22, 10, 18, 4]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [12, 18, 15, 17, 12, 10, 14, 16, 25, 17, 20, 8]
          }
        ]);
        break;
      case 2:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [12, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [17, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
          }
        ]);
        break;
      case 3:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [1, 2, 3, 5, 1, 0, 2, 0, 6, 1, 5, 3]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [5, 3, 5, 6, 7, 0, 3, 1, 7, 3, 5, 4]
          }
        ]);
        break;
      case 0:
      default:
        setSeries([
          {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
          },
          {
            name: 'TEAM B',
            type: 'line',
            data: [34, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
          }
        ]);
    }
  };

  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Invoice Summary' }];

  return (
    <>
      <Breadcrumbs custom heading="My Dashboard" links={breadcrumbLinks} />
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={9}>
          <MainCard>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InvoiceIncomeAreaChart series={series} />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} lg={3}>
          <InvoiceCard />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <InvoiceUserList />
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <InvoicePieChart />
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <InvoiceNotificationList />
        </Grid>
      </Grid>
    </>
  );
}
