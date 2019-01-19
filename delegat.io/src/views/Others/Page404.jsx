import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import { Link } from "react-router-dom";

// Sections for this page
import HeaderBar from "components/Header/HeaderBar.jsx";
import image from "assets/img/bg.jpg";

import AuthUserContext from '../../components/Auth/AuthUserContext';
import withAuthorization from '../../components/Auth/withAuthorization';
import withAuthentication from '../../components/Auth/withAuthentication';

const dashboardRoutes = [];

class Page404 extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <HeaderBar authUser={this.props.authUser} {...rest} />
        <Parallax image={image}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>    Page not Found</h1>
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(withStyles(landingPageStyle)(Page404));
