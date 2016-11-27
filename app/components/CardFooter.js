var React = require('react');
require('../styles/styles.css')

function CardFooter (props) {
  return (
    <div className='card-footer'>
      <h5>{props.footerText}</h5>
    </div>
  )
}

module.exports = CardFooter;
