var React = require('react');
var ReactDOM = require('react-dom');
var Stylesheet = require('./styles/styles.css');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div className='container'>Halloo!</div>
    )
  }
})

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
