import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles, colors
} from '@material-ui/core';
import {
  Info as InfoIcon,
  Wifi as WifiIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    height: 48,
    width: 48
  }
}));

function RoiPerCustomer({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: '40'
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          Online Now <InfoIcon size={15} color={colors.lightBlue[500]}/>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography
            color="inherit"
            variant="h3"
          >
            {data.value}
          </Typography>
        </Box>
      </Box>
      <Avatar
        className={classes.avatar}
        color="inherit"
      >
        <WifiIcon color={colors.green[500]}/>
      </Avatar>
    </Card>
  );
}

RoiPerCustomer.propTypes = {
  className: PropTypes.string
};

export default RoiPerCustomer;
