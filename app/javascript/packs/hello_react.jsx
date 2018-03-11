// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

class test extends React.Component {
  render() {
    return <h1>Hey this is working now</h1>;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React"/>,
    document.body.appendChild(document.createElement('div')),
  )
})
