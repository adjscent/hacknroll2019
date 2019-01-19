import React from 'react'
import { withRouter } from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import { firebase } from '../../firebase'

const withAuthorization = authCondition => Component => {
  class withAuthorization extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        authUser: null
      }
    }

    componentDidMount () {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login-page')
        } else {
          this.setState({authUser})
        }
      })
    }
    render () {
      return (
        <AuthUserContext.Consumer>
          {authUser => (this.state.authUser ? <Component authUser={this.state.authUser} /> : "Loading... If you still see this message after a while, you are not authorized to view the page")}
        </AuthUserContext.Consumer>
      )
    }
  }
  return withRouter(withAuthorization)
}
export default withAuthorization
