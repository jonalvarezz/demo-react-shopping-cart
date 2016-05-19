
var React = require('react')
var render = require('react-dom').render
var API = require('./api')

var ProductList = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired
  },

  render: function () {
    var props = this.props;
    return (
      <ul className="product-list">
        {props.products.map(function (product) {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>$ {product.price}</p>
            </li>
          )
        })}
      </ul>
    );
  }
})

// Safe data get
// Only render when Data arrives.
// Futher reading: React componentDidMount
API.getData(onDataLoaded)

function onDataLoaded (products) {
  render(
    <ProductList products={products} />,
    document.getElementById('app')
  )
}
