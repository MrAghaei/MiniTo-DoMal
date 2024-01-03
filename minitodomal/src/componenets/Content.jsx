import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = [...tasks]; //to avoid directly modifying the original array
    const index = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div className={'content'}>
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleChangeInput={handleChangeInput}
        taskInput={taskInput}
      />

      <TaskList tasks={tasks} setTasks={setTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default Content;
