import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    color: '#243261',
    fontSize: '0.8125rem',
    paddingLeft: '0px',
    paddingTop: '3px'
  }
};

const AddWRStatusButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WRStatus/create?WorkRequestID=${record.id}`}
    label="ایجاد"
    title="اضافه کردن وضعیت"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddWRStatusButton);
