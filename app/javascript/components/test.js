import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class test extends React.Component {
  render() {
    return <h1>Hey this is working now</h1>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
	 <test />,
	 document.body.appendChild(document.createElement('div')
  );
})
