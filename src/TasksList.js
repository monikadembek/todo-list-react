import * as React from 'react';
import TaskItem from './TaskItem';

class TasksList extends React.Component {
	handleDelete = (i) => {
    this.props.del(i); //pass index of item to delete to App component
  }
  
  render() {
		return (
			<ul>
        {this.props.tasks.map((task, index) => <TaskItem key={index} delIndex={index} taskContent={task} delTask={this.handleDelete}/>)}
      </ul>
		);
	}
}

export default TasksList;