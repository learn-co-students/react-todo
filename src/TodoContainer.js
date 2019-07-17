import React from 'react';
import Todo from './Todo';

class TodoContainer extends React.Component {
  render(){
    const { todos, deleteTodo, updateTodo } = this.props

    const todoLis = todos.map((todo) =>{
      return <Todo 
               deleteTodo={deleteTodo}
               updateTodo={updateTodo}
               value={todo} />
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
