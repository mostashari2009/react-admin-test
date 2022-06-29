
import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useLogin, useNotify, defaultTheme,Notification,translate} from 'react-admin';
import PropTypes from 'prop-types';
import image from './image.png';

const useStyles = makeStyles({
  auth:{
    //justifyContent:'center',
    fontFamily:'B Nazanin',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderStartStartRadius: '16px',
    borderStartEndRadius:'16px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    boxShadow:'10px 10px 18px #cbced1',
    //background:'#0863cc',
  }, 
  authrigh:{
    padding:'30px 10px',
    borderStartStartRadius: '15px',
    borderBottomRightRadius: '15px',
    borderStartEndRadius:'15px',
    borderBottomLeftRadius: '15px',
    border: '1px solid #ecf0f3',
    textAlign: 'center',
    background: '#fff',
  },
  logoimage: {
    width:'253px',
    marginRight:'10PX'
    //background:'#0863cc',
  },
  
 username:{
    width: '235px',
    padding:'5px',
    margin:'8px 10px 4px 10px',
    border: '1px solid silver',
    borderStartStartRadius: '15px',
    borderStartEndRadius:'15px',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    boxShadow:'2px 2px 2px #cbced1',
    fontFamily:'B Nazanin',
    fontSize: '16px',
},
password:{
    width: '235px',
    padding:'5px',
    margin:'4px 10px 4px 10px',
    border: '1px solid silver',
    borderStartStartRadius: '15px',
    borderStartEndRadius:'15px',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    boxShadow:'2px 2px 2px #cbced1',
    fontFamily:'B Nazanin',
    fontSize: '16px',

},
 botton1:{
    padding:'2px',  
    width: '248px',
    margin:'4px 10px',
    marginBottom:'14px',
    border: '1px solid silver',
    borderStartStartRadius: '16px',
    borderStartEndRadius:'16px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    boxShadow:'3px 3px 2px #cbced1',
    transition: 'opacity 150ms easeOut 0s',
    fontFamily:'B Nazanin',
    fontSize: '20px',
    fontWeight:'bold',
    color:'#fff',
    background:'#0863cc',
    bordercolor: '#0c7cd5',
 },
});

const MyLoginPage = ({ theme }) => {
    //const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const HandleClick = () => {   
        login({ username, password } ).catch(() => notify("نام کاربری یا پسورد، صحیح نیست"));    
    }
    
    return (
    
        <ThemeProvider theme={createTheme(defaultTheme)}>
              <div className={classes.auth} > 
               <div className={classes.authrigh} >
                    <div className={classes.logo}>
                     <img src={image} alt="logo" className={classes.logoimage} />
                   </div>
                   <div>
                   <form className={classes.form1}> 
                      <div className={classes.input1} >
                        <input className={classes.username}
                          placeholder="نام کاربری"
                          name="username"
                          type="username"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                         />
                     </div> 
                     <div className={classes.input2} >
                        <input className={classes.password}
                           placeholder="رمز عبور"
                           name="password"
                           type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                        />
                     </div>
                  </form> 
                 <Button variant="contained" onClick={HandleClick} className={classes.botton1} >ورود</Button>
                 </div>
                         
              </div>  
               
            </div>  
           <Notification />
        </ThemeProvider>
         
    );
};

MyLoginPage.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
};

export default MyLoginPage;
