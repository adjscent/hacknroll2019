/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import {auth, firebase} from "../../firebase";

function HeaderLinks({
  ...props
}) {
  const {classes} = props;
  return (<List className={classes.list}>
    <ListItem className={classes.listItem}>
      <Button href="/compare" color="transparent" className={classes.navLink}>
        Main Page
      </Button>
    </ListItem>

    {
      props.authUser == undefined
        ? (<ListItem className={classes.listItem}>
          <Button href="/login-page" color="transparent" className={classes.navLink}>
            Sign In
          </Button>
        </ListItem>)
        : (<div className={classes.listItem}>
           <ListItem className={classes.listItem}>
          <Button onClick={auth.doSignOut} href="/" color="transparent" className={classes.navLink}>
            Sign Out
          </Button>
            </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/profile-page" color="transparent" className={classes.navLink}>
              Profile Page
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/admin" color="transparent" className={classes.navLink}>
              Admin
            </Button>
          </ListItem>
        </div>)
    }

  </List>);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
