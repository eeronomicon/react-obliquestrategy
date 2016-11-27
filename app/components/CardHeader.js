var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var CardHeader = React.createClass({
  render: function () {
    return (
      <div>
        <Link to={this.props.headerLink}>
          {this.props.headerText}
        </Link>
      </div>
    )
  }
});

module.exports = CardHeader;
