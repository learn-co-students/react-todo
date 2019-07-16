import React from 'react';
import Todo from './Todo';

class TodoContainer extends React.Component {
  render(){
    const todoLis = this.props.todos.map((todo) =>{
      return <Todo value={todo} />
    })

    return (
      <div>
        <ul>
          {todoLis}
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
