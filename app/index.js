
var React = require('react')
var render = require('react-dom').render
var API = require('./api')

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
