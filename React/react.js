// Previously there were two choices for defining React components, the first being React.createClass():
const MyComponent = React.createClass({
  render: function() {
    return <div className={this.props.className}/>;
  }
});

// ... and the other being ES6 classes:
class MyComponent extends React.Component {
  render() {
    return <div className={this.props.className}/>;
  }
}

// React 0.14 introduced a new syntax for defining components, as functions of props:

const MyComponent = props => (
  <div className={props.className}/>
);

// Methods do not automatically bind this to the class instance. Explicitly use
// bind statement in a stateful component.
constructor(props) {
super(props);
// some code...
this.handleNameChange = this.handleNameChange.bind(this);
}