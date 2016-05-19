
var React = require('react')

var Product = React.createClass({
  propTypes: {
    id: React.PropTypes.any.isRequired,
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired
  },

  render: function () {
    var props = this.props
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
      </li>
    )
  }
})

module.exports = Product
