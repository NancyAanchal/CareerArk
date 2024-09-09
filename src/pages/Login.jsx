import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.screen}>
        <div style={styles.screenContent}>
          <form style={styles.login}>
            <div style={styles.loginField}>
              <i className="login__icon fas fa-user" style={styles.loginIcon}></i>
              <input type="text" className="login__input" placeholder="User name / Email" style={styles.loginInput} />
            </div>
            <div style={styles.loginField}>
              <i className="login__icon fas fa-lock" style={styles.loginIcon}></i>
              <input type="password" className="login__input" placeholder="Password" style={styles.loginInput} />
            </div>
            <button type="submit" style={styles.loginSubmit}>
              <span style={styles.buttonText}>Log In Now</span>
              <i className="button__icon fas fa-chevron-right" style={styles.buttonIcon}></i>
            </button>
          </form>
          <div style={styles.socialLogin}>
            <h3>log in via</h3>
            <div style={styles.socialIcons}>
            <a href="/comingsoon" className="social-login__icon fab fa-instagram" style={styles.socialIcon} aria-label="Instagram logo"></a>
            <a href="/comingsoon" className="social-login__icon fab fa-facebook" style={styles.socialIcon} aria-label="Facebook logo"></a>
            <a href="/comingsoon" className="social-login__icon fab fa-twitter" style={styles.socialIcon} aria-label="Twitter logo"></a>

            </div>
          </div>
        </div>
        <div style={styles.screenBackground}>
          <span style={styles.screenBackgroundShape4}></span>
          <span style={styles.screenBackgroundShape3}></span>
          <span style={styles.screenBackgroundShape2}></span>
          <span style={styles.screenBackgroundShape1}></span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/021/430/813/non_2x/abstract-fluid-gradient-background-orange-color-orange-waves-background-web-banner-template-beautiful-abstract-background-with-liquid-form-landing-page-poster-for-web-vector.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  screen: {
    background: 'linear-gradient(90deg, #ffce83, #ffd17b)',
    position: 'relative',
    height: '600px',
    width: '360px',
    boxShadow: '0px 0px 24px #ffffff',
  },
  screenContent: {
    zIndex: 1,
    position: 'relative',
    height: '100%',
  },
  screenBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    clipPath: 'inset(0 0 0 0)',
  },
  screenBackgroundShape1: {
    height: '520px',
    width: '520px',
    background: '#ffffff',
    top: '-50px',
    right: '120px',
    borderRadius: '0 72px 0 0',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  screenBackgroundShape2: {
    height: '220px',
    width: '220px',
    background: '#d78410',
    top: '-172px',
    right: 0,
    borderRadius: '32px',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  screenBackgroundShape3: {
    height: '540px',
    width: '190px',
    background: 'linear-gradient(270deg, #ffc400, #ffa200)',
    top: '-24px',
    right: 0,
    borderRadius: '32px',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  screenBackgroundShape4: {
    height: '400px',
    width: '200px',
    background: '#9b4800',
    top: '420px',
    right: '50px',
    borderRadius: '60px',
    transform: 'rotate(45deg)',
    position: 'absolute',
  },
  login: {
    width: '320px',
    padding: '30px',
    paddingTop: '156px',
  },
  loginField: {
    padding: '20px 0px',
    position: 'relative',
  },
  loginIcon: {
    position: 'absolute',
    top: '30px',
    color: '#ff9100',
  },
  loginInput: {
    border: 'none',
    borderBottom: '2px solid #D1D1D4',
    background: 'none',
    padding: '10px',
    paddingLeft: '24px',
    fontWeight: 700,
    width: '75%',
    transition: '.2s',
  },
  loginSubmit: {
    background: '#fff',
    fontSize: '14px',
    marginTop: '30px',
    padding: '16px 20px',
    borderRadius: '26px',
    border: '1px solid #D4D3E8',
    textTransform: 'uppercase',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: '#593301',
    boxShadow: '0px 2px 2px #e6900e',
    cursor: 'pointer',
    transition: '.2s',
  },
  buttonText: {
    marginRight: 'auto',
  },
  buttonIcon: {
    fontSize: '24px',
    marginLeft: 'auto',
    color: '#ff6a00',
  },
  socialLogin: {
    position: 'absolute',
    height: '140px',
    width: '160px',
    textAlign: 'center',
    bottom: 0,
    right: 0,
    color: '#fff',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    padding: '20px 10px',
    color: '#fff',
    textDecoration: 'none',
    textShadow: '0px 0px 8px #7875B5',
  },
};

export default LoginPage;
