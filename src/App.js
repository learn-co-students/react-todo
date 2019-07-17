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
    console.log(newTodo)
    const oldTodos = this.state.todos;
    this.setState({
      todos: [...oldTodos, newTodo]
    })
  }


  render(){
    return (
      <div className="App">
        <FormContainer addNewTodo={(newTodo) => {this.addNewTodo(newTodo)}}/>
        <TodoContainer todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
