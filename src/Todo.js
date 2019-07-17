import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
      input: this.props.value
    }
  }

  handleEditClick(){
    this.setState({
      editMode: true
    })
  }

  handleDeleteClick(){
    this.props.deleteTodo(this.props.value)
  }

  handleFormChange(e){
    this.setState({input: e.target.value})
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.props.updateTodo(this.props.value, this.state.input)
    this.setState({
      editMode: false
    })
  }

  renderStaticDisplay(){
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={() =>this.handleEditClick()}>edit</button>
        <button onClick={() =>this.handleDeleteClick()}>delete</button>
      </div>
    );
  }

  renderEditForm(){
    return (
      <div>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <input onChange={(e) => this.handleFormChange(e)} value={this.state.input} />
          <input type='submit' />
        </form>
      </div>
    );
  }


  render(){
    return (
      <div>
        { this.state.editMode ? this.renderEditForm() : this.renderStaticDisplay()}
      </div>
    );
  }
}

export default Todo;

