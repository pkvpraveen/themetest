import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from './LatestProjects';
import BounceRate from './NewProjects';
import RoiPerCustomer from './RoiPerCustomer';
import SystemHealth from './SystemHealth';
import TeamTasks from './TeamTasks';
import TotalGuests from './TotalGuests';
import FinancialStats from './FinancialStats';
import EarningsSegmentation from './EarningsSegmentation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function DashboardView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalGuests />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <BounceRate />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <SystemHealth />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <RoiPerCustomer />
          </Grid>
          <Grid
            item
            lg={8}
            xl={9}
            xs={12}
          >
            <FinancialStats />
          </Grid>
          <Grid
            item
            lg={4}
            xl={3}
            xs={12}
          >
            <EarningsSegmentation />
          </Grid>
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <TeamTasks />
          </Grid>
          <Grid
            item
            lg={7}
            xl={8}
            xs={12}
          >
            <LatestProjects />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardView;
