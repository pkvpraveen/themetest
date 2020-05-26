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
import Person from '@material-ui/icons/Person';
import {Info as InfoIcon} from 'react-feather';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function TotalGuests({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: '24,000',
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          Total Guests <InfoIcon size={15} color={colors.lightBlue[500]}/>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            {data.value}
          </Typography>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <Person/>
      </Avatar>
    </Card>
  );
}

TotalGuests.propTypes = {
  className: PropTypes.string
};

export default TotalGuests;
