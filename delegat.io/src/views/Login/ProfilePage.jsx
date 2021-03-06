import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui components
import withStyles from 'material-ui/styles/withStyles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import IconButton from 'components/CustomButtons/IconButton.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import profile from 'assets/img/faces/christian.jpg'

import studio1 from 'assets/img/examples/studio-1.jpg'
import studio2 from 'assets/img/examples/studio-2.jpg'
import studio3 from 'assets/img/examples/studio-3.jpg'
import studio4 from 'assets/img/examples/studio-4.jpg'
import studio5 from 'assets/img/examples/studio-5.jpg'
import work1 from 'assets/img/examples/olu-eletu.jpg'
import work2 from 'assets/img/examples/clem-onojeghuo.jpg'
import work3 from 'assets/img/examples/cynthia-del-rio.jpg'
import work4 from 'assets/img/examples/mariya-georgieva.jpg'
import work5 from 'assets/img/examples/clem-onojegaw.jpg'

import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx'
import HeaderBar from 'components/Header/HeaderBar.jsx'

import {
  auth,
  firebase
} from '../../firebase'

import {
  Link,
  withRouter
} from 'react-router-dom'

import AuthUserContext from '../../components/Auth/AuthUserContext'
import withAuthorization from '../../components/Auth/withAuthorization'

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (

      <div>
        <HeaderBar  authUser={this.props.authUser}  {...rest} />
        <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify='center'>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt='...' className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{this.props.authUser.displayName || this.props.authUser.email}</h3>
                      <h6>User</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
              <Link to='EditorPagePure'>display text</Link>
              </div>
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser

export default withAuthorization(authCondition)(withStyles(profilePageStyle)(ProfilePage))
