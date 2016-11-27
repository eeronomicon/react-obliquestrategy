var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var CardHeader = require('./CardHeader');
var CardBody = require('./CardBody');
require('../styles/styles.css')

function Card () {
  return (
    <div className='card'>
      <CardHeader headerText='Oblique Strategies' />
      <CardBody bodyText='Feed the recording back out of the medium' />
    </div>
  )
}

module.exports = Card;
