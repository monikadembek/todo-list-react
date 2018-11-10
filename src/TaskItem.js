import * as React from 'react';

const TaskItem = (props) => {
	const index = props.delIndex;
	return(
		<li>
			{props.taskContent}
			<button onClick={props.delTask.bind(null, index)}>Delete</button>
		</li>
	);
};

export default TaskItem;