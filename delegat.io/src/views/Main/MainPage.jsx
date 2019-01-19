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
import Calendar from "components/Calendar/Calendar.jsx"

import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";
import { Link } from "react-router-dom";

// Sections for this page
import HeaderBar from "components/Header/HeaderBar.jsx";
import image from "assets/img/bg5.jpg";
import withAuthentication from '../../components/Auth/withAuthentication';
import { Paper } from "material-ui";
import { GridListTileBar } from "material-ui";

class MainPage extends React.Component {
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
                            <Paper className={classes.paper}>Recent Documents</Paper>
                            </GridItem>
                            <GridItem  xs={2}>
                            <Paper className={classes.paper}>Document</Paper>
                            </GridItem>
                            <GridItem xs={4}></GridItem>
                            <GridItem xs={4}></GridItem>
                            <GridItem xs={2}>
                            <Paper className={classes.paper}>Date Last Modified</Paper>
                            </GridItem>
                            <GridItem xs={12}>
                            <Paper className={classes.paper}>Recent Calls</Paper>
                            </GridItem>
                            <GridItem xs={2}>
                            <Paper className={classes.paper}>Call With</Paper>
                            </GridItem>
                            <GridItem xs={5}></GridItem>
                            <GridItem xs={3}>
                            <Paper className={classes.paper}>Document Worked On</Paper>
                            </GridItem>
                            <GridItem xs={2}>
                            <Paper className={classes.paper}>Date/Time Of Call</Paper>
                            </GridItem>
                        </GridContainer>
                        </div>
                        
                        <Button simple="simple" color="primary" size="xs" type="submit">
                        +
                        </Button>
                    </div>

                    <div className={classes.right}>
                    <h1 className={classes.title}>Your Calendar </h1>
                    <Calendar/>
                    </div>
                </div>
            </Parallax>
            <Footer />
        </div>
    );
    }
}

export default withAuthentication(withStyles(mainPageStyle)(MainPage));