var React = require('react');
var Card = require('../components/Card');
var cards = require('../config/cards');

var CardContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      cardNumber: Math.round(Math.random() * cards.length)
    }
  },
  render: function () {
    return (
      <Card cardNumber={this.state.cardNumber} />
    )
  }
});

module.exports = CardContainer;
