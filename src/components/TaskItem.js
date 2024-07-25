import React from 'react';

const TaskItem = ({ task, completeTask, completed }) => {
  return (
    <li>
      <div>
        <span>{task.text}</span>
        <span> (Added: {task.createdAt})</span>
        {completed && <span> (Completed: {task.completedAt})</span>}
      </div>
      {!completed && <button onClick={completeTask}>Complete</button>}
    </li>
  );
};

export default TaskItem;
