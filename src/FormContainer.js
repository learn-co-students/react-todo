import React from 'react'

class FormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    console.log(this)
  }

  handleInputUpdate(event){
    this.setState({
      input: event.target.value
    })
  }

  handleFormSubmission(event){
    event.preventDefault()
    this.props.addNewTodo(this.state.input)
  }

  render(){
    return <div style={{marginBottom: '20px'}}>
      <h4> Add a todo: </h4>
      <form onSubmit={(event)=>{this.handleFormSubmission(event)}}>
        <input onChange={(event) => { this.handleInputUpdate(event)}} value={this.state.input} />
        <input type='submit' />
      </form>
      </div>
  }
}

export default FormContainer
