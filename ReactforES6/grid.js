import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteGrid from 'react-infinite-grid';

class ExampleItem extends React.Component {

  static get propTypes() {
    return {
      index: React.PropTypes.number
    };
  }

  render() {
    return(
      <div className='example'>
        This is {this.props.index}
      </div>
    );
  }

}

// Create 100,000 Example items
let items = [];
for (let i = 0; i <= 100000; i++) {
  items.push(<ExampleItem index={i} />);
}

ReactDOM.render(<InfiniteGrid itemClassName={"item"} entries={items} />, document.getElementById('grid'));