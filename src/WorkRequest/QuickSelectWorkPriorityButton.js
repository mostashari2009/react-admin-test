import React, { useState } from "react";
import { Button } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import WorkPriorityList from "./WorkPriorityList";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fir: { fontFamily: 'system-ui', marginBottom: '16px' },

});

const QuickSelectWorkPriorityButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  return (
    <>
      <Button className={classes.fir} onClick={toggleDrawer} label="انتخاب">
        <TouchAppIcon />
      </Button>
      <Dialog fullWidth open={showPanel} onClose={toggleDrawer}>
        <WorkPriorityList style={{width: '780px'}} {...props} resource="PMWorks/WorkPriority" setId={setId} setShowPanel={setShowPanel} />
      </Dialog>
    </>
  );
};

export default QuickSelectWorkPriorityButton;