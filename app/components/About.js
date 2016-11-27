var React = require('react');
var CardHeader = require('./CardHeader');
var CardBody = require('./CardBody');
require('../styles/styles.css');

var bodyText = 'Oblique Strategies (subtitled Over One Hundred Worthwhile Dilemmas) is a deck of 7-by-9-centimetre (2.8 in × 3.5 in) printed cards in a black container box, created by Brian Eno and Peter Schmidt and first published in 1975. Each card offers a challenging constraint intended to help artists (particularly musicians) break creative blocks by encouraging lateral thinking.';

function About () {
  return (
    <div className='card'>
      <CardHeader headerText='About Oblique Strategies' headerLink='/' />
      <CardBody bodyText={bodyText} />
    </div>
  )
}

module.exports = About;
