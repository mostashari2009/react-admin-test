import * as React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useLogin, useNotify, defaultTheme, Notification } from "react-admin";
import PropTypes from "prop-types";
import Logo from "./logo.png";
import image1 from "./image1.png";
import { useMediaQuery } from "@material-ui/core";
import icon1 from "./icons/instagram.svg";
import icon2 from "./icons/site.png";
import icon3 from "./icons/telegram.svg";
const useStyles = makeStyles({
  body: {
    marginTop: "500px",
  },

  auth: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "B Nazanin",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderStartStartRadius: "5px",
    borderStartEndRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    boxShadow: "13px 13px 20px #cbced1",
  },
  authrigh: {
    padding: "10px",
    width: "320px",
    borderStartStartRadius: "5px",
    borderBottomRightRadius: "5px",
    border: "1px solid #ecf0f3",
    float: "right",
    background: "#fff",
    display: "block",
  },

  form: {
    padding: "10px",
    textAlign: "center ",
  },
  username: {
    width: "260px",
    padding: "10px",
    margin: "10px ",
    marginTop: "20px",
    border: "none",
    borderBottom: "2px solid #cbced1",
    fontFamily: "B Nazanin",
  },
  password: {
    width: "260px",
    padding: "10px",
    margin: "10px 10px",
    border: "none",
    borderBottom: "2px solid #cbced1",
    fontFamily: "B Nazanin",
  },
  button: {
    float: "right",
    width: "90px",
    height: "30px",
    borderStartStartRadius: "15px",
    borderStartEndRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    boxShadow:
      "2px 2px 1px -1px rgba(0,0,0,0.2), 2px 2px 3px 0px rgba(0,0,0,0.1)",
    fontFamily: "B Nazanin",
    fontWeight: "bold",
    color: "#fff",
    background: "#0863cc",
    bordercolor: "#0c7cd5",
    cursor: "pointer",
    textAlign: "center",
  },
  footer: {
    marginTop: " 50px",
    margin: "auto",
    width: "280px",
    display: "flex",
    alignItems: "center",
    textalign: "center",
  },
  socialMedia: {
    marginTop: "5px",
    marginRight: "70px",
    float: "left",
    display: "flex",
    alignItems: "center",
    textalign: "center",
  },
  svgIcone3: {
    width: "29px",
    height: "29px",
  },
  svgIcone2: {
    width: "35px",
    height: "35px",
  },
  svgIcone1: {
    width: "34px",
    height: "34px",
    margin: "10px 10px 10px 15px",
  },
  authleft: {
    textAlign: "center",
    width: "260px",
    float: "left",
    height: "320px",
    borderStartEndRadius: "5px",
    borderBottomLeftRadius: "5px",
    background: "#0863cc",
    position: "relativ",
  },

  image: {
    width: "260px",
    height: "320px",
    borderStartEndRadius: "15px",
    borderBottomLeftRadius: "15px",
    opacity: "0.1",
  },

  container: {
    margin: "0px",
    position: "absolute",
    width: "260px",
  },

  logo: {
    width: "40px",
    height: "40px",
    margin: "auto",
    marginTop: "25px",
  },

  logoimage: {
    borderStartStartRadius: "50%",
    borderStartEndRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    maxWidth: "40px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
  },

  text1: {
    fontSize: "18px",
    color: "#fff",
    fontSize: "bold",
  },
  text2: {
    padding: "10px",
    color: "#fff",
    fontSize: "14px",
    textAlign: "right",
  },
  line: {
    width: "70px",
    border: "0.5px solid #0863cc",
    marginTop: "530px",
  },
  company: {
    color: "#0863cc",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
});

const MyLoginPage = ({ theme }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const HandleClick = () => {
    login({ username, password }).catch(() =>
      notify("نام کاربری یا پسورد، صحیح نیست")
    );
  };

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={classes.body}>
        <div className={classes.auth}>
          <div className={classes.authrigh}>
            <form className={classes.form}>
              <div className={classes.input1}>
                <input
                  className={classes.username}
                  placeholder="نام کاربری"
                  name="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className={classes.input2}>
                <input
                  className={classes.password}
                  placeholder="رمز عبور"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div className={classes.footer}>
              <Button
                variant="contained"
                onClick={HandleClick}
                className={classes.button}
              >
                ورود
              </Button>
              <div className={classes.socialMedia}>
                <div>
                  <a href="https://www.irantpm.ir//">
                    <img
                      alt="icon2"
                      src={icon2}
                      className={classes.svgIcone2}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/iranmaintenance/">
                    <img
                      alt="icon1"
                      src={icon1}
                      className={classes.svgIcone1}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://t.me/iranmaintenance">
                    <img
                      alt="icon3"
                      src={icon3}
                      className={classes.svgIcone3}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.authleft}>
            <div className={classes.container}>
              <div>
                <div className={classes.logo}>
                  <img src={Logo} alt="logo" className={classes.logoimage} />
                </div>
                <div className={classes.title}>CMMS PMWorks</div>
                <div className={classes.text1}>
                  نرم افزار مدیریت نگهداری و تعمیرات
                </div>
              </div>
              <div className={classes.text2}>
                <ul>
                  <li>
                    <p>
                      {" "}
                      بهبود سیستم مدیریت نگهداری و تعمیرات با نرم افزار
                      CMMS-PMWorks
                    </p>
                  </li>
                  <li>
                    <p>
                      کاهش هزینه ها و توقف تجهیزات با تحلیل گزارشات و شاخص های
                      نگهداری و تعمیرات
                    </p>
                  </li>
                  <li>
                    <p>
                      استفاده آسان از نرم افزار با استاندارد سازی داده های
                      تجهیزات
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <img src={image1} alt="Image" className={classes.image} />
          </div>
        </div>
        <Notification />
        <hr className={classes.line}></hr>
        <p className={classes.company}>
          تهیه شده در شرکت مشاوران تدبیر پرداز آویژه
        </p>
      </div>
    </ThemeProvider>
  );
};

MyLoginPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

export default MyLoginPage;
