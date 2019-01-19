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

import AuthUserContext from "../../components/Auth/AuthUserContext";
import withAuthorization from "../../components/Auth/withAuthorization";
import withAuthentication from "../../components/Auth/withAuthentication";

import { auth, firebase } from "../../firebase/index.jsx";

const dashboardRoutes = [];

// Import Admin SDK

// Get a database reference to our posts
var db = firebase.database;
var ref = db.ref("/server/");

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      server: []
    };
  }

  createRoom = e => {
    e.preventDefault();

    // A post entry.
    var postData = {
      master: this.props.authUser.email
    };

    console.log(postData);
    // Get a key for a new Post.
    var newPostKey = firebase.database
      .ref()
      .child("server")
      .push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates["/server/" + newPostKey] = postData;
    firebase.database.ref().update(updates);
  };

  componentWillMount() {
    const messagesRef = firebase.database
      .ref("server")
      .orderByKey()
      .limitToLast(100);

    messagesRef.on("child_added", snapshot => {
      const server = { text: snapshot.val(), id: snapshot.key };
      this.setState(prevState => ({
        server: [server, ...prevState.server]
      }));
    });
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <HeaderBar authUser={this.props.authUser} {...rest} />
        <Parallax image={image}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Test header.</h1>
                <h4>Welcome to Delegat.io</h4>
                <div>
                  Current Rooms{" "}
                  {this.state.server.map(function(d, idx) {
                    return (
                      <li key={idx}>
                        <a href={'http://localhost:3500/?id=' + d.id}>{d.id}</a>
                      </li>
                    );
                  })}
                </div>
                <Button onClick={this.createRoom} type="button">
                  Create Room
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(withStyles(landingPageStyle)(UserPage));
