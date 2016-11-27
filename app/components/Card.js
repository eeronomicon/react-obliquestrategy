var React = require('react');
var CardHeader = require('./CardHeader');
var CardBody = require('./CardBody');
var CardFooter = require('./CardFooter');
require('../styles/styles.css')

function Card () {
  return (
    <div className='card'>
      <CardHeader headerText='Oblique Strategies' headerLink='about' />
      <CardBody bodyText='Feed the recording back out of the medium' />
      <CardFooter footerText='Click here to draw another card' />
    </div>
  )
}

module.exports = Card;
