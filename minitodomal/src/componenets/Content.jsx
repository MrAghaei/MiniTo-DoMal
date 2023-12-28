import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };
  const handleAddTask = () => {
    if (taskInput !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]; //to avoid directly modifying the original array
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div className={'content'}>
      <AddTask
        handleAddTask={handleAddTask}
        handleInputChange={handleInputChange}
        taskInput={taskInput}
      />

      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default Content;
