import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, completed }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          completeTask={() => completeTask && completeTask(index)}
          completed={completed}
        />
      ))}
    </ul>
  );
};

export default TaskList;
