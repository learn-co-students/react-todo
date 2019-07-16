import React from 'react';

class Todo extends React.Component {
  render(){
    return (
      <h6>
        {this.props.value}
      </h6>
    );
  }
}

export default Todo;
