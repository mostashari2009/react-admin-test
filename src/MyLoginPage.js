
import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useLogin, useNotify, defaultTheme,Notification,PasswordInput,SimpleForm,TextInput } from 'react-admin';
import PropTypes from 'prop-types';
import image from './image.png';


const useStyles = makeStyles({
  auth:{
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
    background:'#0863cc',
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
  form :{
    fontFamily:'B Nazanin',
    textAlign: 'right',
  },
 username:{
  width:'253px',
},
password:{
    
},
 button:{
    //padding:'2px',  
    width: '263px',
    margin:'14px 10px',
    marginBottom:'10px',
    border: '1px solid silver',
    borderStartStartRadius: '16px',
    borderStartEndRadius:'16px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    boxShadow:'1px 1px 1px #cbced1',
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
                   <SimpleForm className={classes.form}> 
                      <div className={classes.input1} >
                        <TextInput className={classes.username}
                          source="username"
                          label="نام کاربری "
                          onChange={e => setUsername(e.target.value)}
                         />
                      </div> 
                      <div className={classes.input2} >
                        <PasswordInput className={classes.password}
                        source="password"  
                        label="رمز عبور "
                        onChange={e => setPassword(e.target.value)}
                        />
                     </div>
                     
                  </SimpleForm> 
                 
                 </div>
                  <Button variant="contained" onClick={HandleClick} className={classes.button} >ورود</Button>       
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
