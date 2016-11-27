var React = require('react');
var Card = require('../components/Card');
var cards = require('../config/cards');

var CardContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  drawCard: function () {
    return Math.round(Math.random() * cards.length);
  },
  getInitialState: function () {
    return {
      cardNumber: this.drawCard()
    }
  },
  redrawCard: function () {
    this.setState ({
      cardNumber: this.drawCard()
    });
  },
  render: function () {
    return (
      <Card cardNumber={this.state.cardNumber} redrawCard={this.redrawCard} />
    )
  }
});

module.exports = CardContainer;
