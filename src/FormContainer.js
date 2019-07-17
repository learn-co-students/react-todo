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
    return <div style={{margin: '20px'}}>
      <form onSubmit={(event)=>{this.handleFormSubmission(event)}}>
        <input onChange={(event) => { this.handleInputUpdate(event)}} value={this.state.input} />
        <input type='submit' />
      </form>
    </div>
  }
}

export default FormContainer
