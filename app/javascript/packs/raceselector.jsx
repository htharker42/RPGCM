import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class raceSelector extends React.Component {
  render() {
    return(
          <div>
            <h3> Select Character Race </h3>
          </div>
        )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
	 <raceSelector />, document.getElementById('app'),
  )
})
