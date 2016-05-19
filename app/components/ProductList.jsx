
var React = require('react')
var Product = require('./Product')

var ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired
  },

  render: function () {
    var props = this.props;
    return (
      <ul className="product-list">
        {props.products.map(function (product) {
          return <Product key={product.id} {...product} />
        })}
      </ul>
    );
  }
})

module.exports = ProductList
