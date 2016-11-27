var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
require('../styles/styles.css')

function CardFooter (props) {
  return (
    <div className='card-footer'>
      <h5><a href='#' onClick={props.redrawCard}>{props.footerText}</a></h5>
    </div>
  )
}

module.exports = CardFooter;
