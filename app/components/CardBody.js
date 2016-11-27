var React = require('react');

function CardBody (props) {
  return (
    <div>
      <p className='card-body'>{props.bodyText}</p>
    </div>
  )
}

module.exports = CardBody;
