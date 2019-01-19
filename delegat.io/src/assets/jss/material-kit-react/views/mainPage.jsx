import { container, title } from 'assets/jss/material-kit-react.jsx'

const mainPageStyle = {
  container: {
    zIndex: '1',
    color: '#4286f4',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '-10px',
    minHeight: '10px',
    color: '#4286f4',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#4286f4',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '10px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  }
}

export default mainPageStyle
