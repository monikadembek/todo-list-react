import * as React from 'react';
import AppHeader from './AppHeader';
import TasksList from './TasksList';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      tasks: ["bla", "second task"]
    };
  }

  addNewTask = (task) => {
    const tasksArr = [...this.state.tasks];
    tasksArr.push(task);
    this.setState({
      tasks: tasksArr
    });
  };

  deleteTask = (i) => {
    let tasksArr = [...this.state.tasks];
    tasksArr.splice(i,1);
    this.setState({
      tasks: tasksArr
    });
  };

  render() {
    return (
      <div>
        <AppHeader addNewTask={this.addNewTask}/>
        <TasksList tasks={this.state.tasks} del={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
