import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hey this is working now</h1>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
	 <MyComponentClass />, document.getElementById('app'),
  )
})
