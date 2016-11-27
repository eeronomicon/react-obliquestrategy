var React = require('react');
var CardHeader = require('./CardHeader');
var CardBody = require('./CardBody');
var CardFooter = require('./CardFooter');
var cards = require('../config/cards');
require('../styles/styles.css')

function Card (props) {
  return (
      <div className='card'>
      <CardHeader headerText='Oblique Strategies' headerLink='about' />
      <CardBody bodyText={cards[props.cardNumber]} />
      <CardFooter footerText='Click here to draw another card' />
    </div>
  )
}

module.exports = Card;
