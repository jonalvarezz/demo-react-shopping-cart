
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
      <li className="product">
        <div className="wrapper">
          <header className="product-image">
            <img src={props.image} alt={props.title} />
          </header>
          <div className="product-content">
            <h2 className="product-title">{props.title}</h2>
          </div>
          <footer className="product-action">
            <p className="product-price">$ {props.price}</p>
            <button className="button product-button">
              Add to cart
            </button>
          </footer>
        </div>
      </li>
    )
  }
})

module.exports = Product
