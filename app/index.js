require('../stylus/main.styl'); //Styles - ignore

var React = require('react')
var render = require('react-dom').render
var API = require('./api')
var ProductList = require('./components/ProductList')

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
