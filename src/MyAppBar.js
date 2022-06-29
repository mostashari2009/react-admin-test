import * as React from 'react';
import { AppBar  } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//import Logo from './Logo';

const useStyles = makeStyles({
    appbar:{
        backgroundColor: '#0863cc',
    },
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'B Nazanin',
        //backgroundColor: 'green', 
    },
    spacer: {
        flex: 1,
    },
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar} {...props}  >
           
              <Typography
                variant="h6"
                id="react-admin-title"
                className={classes.title}
               />
              <span className={classes.spacer} />
               
        </AppBar>   
    );
};

export default MyAppBar;