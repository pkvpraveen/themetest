import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, colors, makeStyles, Typography } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Info as InfoIcon } from 'react-feather';

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

function NewProjects({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: 12,
    difference: -10
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
          Bounce Rate <InfoIcon size={15} color={colors.lightBlue[500]}/>
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
            {data.value} %
          </Typography>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <PersonAddIcon />
      </Avatar>
    </Card>
  );
}

NewProjects.propTypes = {
  className: PropTypes.string
};

export default NewProjects;
