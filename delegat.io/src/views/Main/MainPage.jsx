import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Calendar from "components/Calendar/Calendar.jsx";

import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";

// Sections for this page
import HeaderBar from "components/Header/HeaderBar.jsx";
import image from "assets/img/bg7.jpg";
import withAuthentication from "../../components/Auth/withAuthentication";
import { Paper } from "material-ui";
import { auth, firebase } from "../../firebase/index.jsx";

// Get a database reference to our posts
var db = firebase.database;
var ref = db.ref("/server/");

class MainPage extends React.Component {
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
          <div id="main">
            <div className={classes.left}>
              <div className={classes.root}>
                <GridContainer spacing={24}>
                  <GridItem xs={12}>
                    <Paper className={classes.paper}>
                    Recent Documents
                    </Paper>
                  </GridItem>
                  <GridItem xs={2}>
                    <Paper className={classes.paper}>Document</Paper>
                  </GridItem>
                  <GridItem xs={4} />
                  <GridItem xs={4} />
                  <GridItem xs={2}>
                    <Paper className={classes.paper}>Date Last Modified</Paper>
                  </GridItem>
                  <GridItem xs={12}>
                    <Paper className={classes.paper}>Recent Calls</Paper>
                  </GridItem>
                  <GridItem xs={2}>
                    <Paper className={classes.paper}>Call With</Paper>
                  </GridItem>
                  <GridItem xs={5} />
                  <GridItem xs={3}>
                    <Paper className={classes.paper}>Document Worked On</Paper>
                  </GridItem>
                  <GridItem xs={2}>
                    <Paper className={classes.paper}>Date/Time Of Call</Paper>
                  </GridItem>

                </GridContainer>
              </div>

              <Button color="primary" size="xs">
                +
              </Button>
            </div>

            <div className={classes.right}>
              <h1 className={classes.title}>Your Calendar </h1>
              <Calendar />
            </div>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(withStyles(mainPageStyle)(MainPage));
