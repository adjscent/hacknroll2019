import React from 'react'
import AuthUserContext from './AuthUserContext'

import {
  auth,
  firebase
} from '../../firebase/index.jsx'

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        authUser: null
      }
    }

    componentDidMount () {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }))
      })
    }
    render () {
      const { authUser } = this.state
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component authUser={authUser}/>
        </AuthUserContext.Provider>
      )
    }
  }
export default withAuthentication
