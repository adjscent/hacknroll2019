import React from 'react'
import Header from './Header'
import HeaderLinks from './HeaderLinks'

class HeaderBar extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          absolute
          color='transparent'
          brand='Delegat.io'
          rightLinks={<HeaderLinks authUser={this.props.authUser}/>}
          {...rest}
        />
      </div>
    )
  }
}

export default HeaderBar;