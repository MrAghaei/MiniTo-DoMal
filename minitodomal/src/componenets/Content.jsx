import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState('');


  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };
  const handleAddTask = () => {

    const newTask = {
      id: tasks.length + 1,
      text: taskInput,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput('');

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


      <TaskList tasks={tasks} setTasks={setTasks} handleDeleteTask={handleDeleteTask} />

    </div>
  );
}

export default Content;
