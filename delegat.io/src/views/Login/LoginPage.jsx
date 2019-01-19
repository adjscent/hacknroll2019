import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Snackbar from "components/Snackbar/SnackbarContent.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import {LinearProgress, Typography} from "material-ui";

import {auth, firebase} from "../../firebase/index.jsx";

import {Link, withRouter} from "react-router-dom";

import ForgotForm from "./ForgotForm";
import SignUpForm from "./SignUpForm";
import HeaderBar from "components/Header/HeaderBar.jsx";

import AuthUserContext from '../../components/Auth/AuthUserContext';
import withAuthorization from '../../components/Auth/withAuthorization';
import withAuthentication from '../../components/Auth/withAuthentication';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
      loading: false,
      authed: false,
      open: {
        signUp: false,
        forgot: false
      },
      forgotMsg: null,
      loginMsg: null,
      signUpMsg: null,
      authUser: null
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(function() {
      this.setState({cardAnimaton: ""});
    }.bind(this), 700);
  }

  handleLogin = e => {
    e.preventDefault();
    this.setState({loading: true});
    this.setState({loginMsg: null});
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password).then(authUser => {
      this.setState(() => ({authUser}));
      this.props.history.push("/profile-page");
    }).catch(error => {
      console.log(error.message);
      this.setState({loading: false});
      this.setState({loginMsg: error.message});
    });
  };

  updateEmail = e => {
    this.setState({email: e.target.value});
    if (e.target.value === "") {
      this.setState({loginMsg: null});
    }
  };
  updatePassword = e => {
    this.setState({password: e.target.value});
    if (e.target.value === "") {
      this.setState({loginMsg: null});
    }
  };
  handleSignUp = e => {
    this.setState({loading: true});
    auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password).then(authUser => {
      this.setState({
        open: {
          signUp: false
        },
        authUser
      });
      this.props.history.push("/profile-page");
    }).catch(error => {
      console.log(error.message);
      this.setState({loading: false});
      this.setState({signUpMsg: error.message});
    });
  };
  handleForgot = e => {
    this.setState({loading: true});
    auth.doPasswordReset(this.state.email).then(() => {
      this.setState({forgotMsg: "Password reset email sent."});
      this.setState({loading: false});
    }).catch(error => {
      this.setState({loading: false});
      this.setState({forgotMsg: "Email address not found."});
    });
  };
  signUpDialog = () => {
    this.setState({
      open: {
        signUp: true
      }
    });
  };
  forgotDialog = () => {
    this.setState({
      open: {
        forgot: true
      }
    });
  };
  closeDialog = () => {
    this.setState({
      open: {
        signUp: false
      }
    });
    this.setState({
      open: {
        forgot: false
      }
    });
    this.setState({signUpMsg: null});
    this.setState({forgotMsg: null});
    this.setState({loginMsg: null});
  };

  googleSignIn = e => {
    e.preventDefault();
    var provider = firebase.provider;

    firebase.auth.signInWithPopup(provider).then(authUser => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      console.log(authUser);
      authUser = authUser.user;
      this.setState({
        open: {
          signUp: false
        },
        authUser
      });
      this.props.history.push("/profile-page");

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (<div>
      <HeaderBar authUser={this.props.authUser} {...rest}/>
      <div className={classes.pageHeader} style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form} onSubmit={this.handleLogin} noValidate="noValidate" autoComplete="off">
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>
                      Login
                    </h4>

                        <div className={classes.socialLine}>
                          <IconButton
                            color="transparent"
                            onClick={this.googleSignIn}
                          >
                            <i
                              className={
                                classes.socialIcons + " fab fa-google-plus-g"
                              }
                            />
                          </IconButton>
                        </div>
                  </CardHeader>
                  <p className={classes.divider}>
                    Or Be Classical
                  </p>
                  <CardBody>
                    <CustomInput labelText="Email" id="email" formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        type: "email",
                        value: this.state.email,
                        onChange: this.updateEmail,
                        error: this.state.loginMsg && true,
                        endAdornment: (<InputAdornment position="end">
                          <Email className={classes.inputIconsColor}/>
                        </InputAdornment>)
                      }}/>
                    <CustomInput labelText="Password" id="password" formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        type: "password",
                        onChange: this.updatePassword,
                        value: this.state.password,
                        error: this.state.loginMsg && true,
                        endAdornment: (<InputAdornment position="end">
                          <LockOutline className={classes.inputIconsColor}/>
                        </InputAdornment>)
                      }}/>
                    <p>
                      <a onClick={this.forgotDialog} dense="dense" className={classes.bottomButtons} style={{
                          cursor: "pointer"
                        }}>
                        Forgot password?
                      </a>
                    </p>
                  </CardBody>
                  {
                    this.state.loginMsg
                      ? (<Snackbar ref="snackbar" className={classes.snackbar} message={<span> {
                          this.state.loginMsg
                        }
                        </span>} color="danger"/>)
                      : null
                  }
                  <CardFooter className={classes.cardFooter}>
                    <Button simple="simple" color="primary" size="lg" type="submit">
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>

              <p>
                Dont have an account?{" "}
                <a onClick={this.signUpDialog} dense="dense" className={classes.bottomButtons} style={{
                    cursor: "pointer"
                  }}>
                  Sign Up
                </a>.
              </p>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont="whiteFont"/>
      </div>
      <SignUpForm updateEmail={this.updateEmail} updatePassword={this.updatePassword} email={this.state.email} open={this.state.open.signUp} close={this.closeDialog} msg={this.state.signUpMsg} submit={this.handleSignUp}/>
      <ForgotForm open={this.state.open.forgot} close={this.closeDialog} updateEmail={this.updateEmail} email={this.state.email} msg={this.state.forgotMsg} submit={this.handleForgot}/>
    </div>);
  }
}

export default withAuthentication(withRouter(withStyles(loginPageStyle)(LoginPage)));
