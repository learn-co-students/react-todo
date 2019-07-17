import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './FormContainer';
import TodoContainer from './TodoContainer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: ['clean room', 'dust']
    }
  }

  addNewTodo(newTodo){
    const oldTodos = this.state.todos;
    this.setState({
      todos: [...oldTodos, newTodo]
    })
  }

  deleteTodo(todoToDelete){
    const filteredTodos = this.state.todos.filter((todo)=> todo !== todoToDelete)
    this.setState({
      todos: filteredTodos
    })
  }

  updateTodo(originalTodo, editedTodo){
    const todoIndex = this.state.todos.findIndex((todo) => todo === originalTodo)
    const updatedTodosList = this.state.todos
    updatedTodosList[todoIndex] = editedTodo
    this.setState({
      todos: updatedTodosList
    })
  }


  render(){
    return (
      <div className="App">
        <FormContainer addNewTodo={(newTodo) => {this.addNewTodo(newTodo)}}/>
        <TodoContainer 
          deleteTodo={(todo) => {this.deleteTodo(todo)}}
          updateTodo={(originalTodo, editedTodo) => {this.updateTodo(originalTodo, editedTodo)}}
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
