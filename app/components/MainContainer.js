var React = require('react');
require('../styles/styles.css')

function MainContainer (props) {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
