import * as React from 'react';

class AppHeader extends React.Component {
	constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      taskInput: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewTask(this.state.taskInput); //function passed as props from parent
    this.setState({taskInput: ''});
  }

  handleChange(e) {
    this.setState({taskInput: e.target.value});
  }

  render() {
    return (
      <header>
        <h1>ToDo List App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.taskInput} onChange={this.handleChange}/>
          <button>Add new task</button>
        </form>
      </header>
    );  
  }
	
	
}

export default AppHeader;