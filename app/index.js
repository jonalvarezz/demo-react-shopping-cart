
var React = require('react')
var render = require('react-dom').render

// First React component receiving props
var Heading1 = React.createClass({
  render: function () {
    return (
      <h1>{this.props.content}</h1>
    )
  }
})

render(
  <Heading1 content={'Hello Pereira JS from React'} />,
  document.getElementById('app')
)
