import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = (event) => {
    setTaskInput(event.target.value);
  };
  function findTaskIndexById(tasks, id) {
    return tasks.findIndex((task) => task.id === id);
  }

  function handleDoneTask(id) {
    const updatedTasks = [...tasks];
    const index = findTaskIndexById(updatedTasks, id);
    updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
    setTasks(updatedTasks);
  }
  const handleDeleteTask = (id) => {
    const updatedTasks = [...tasks]; //to avoid directly modifying the original array
    const index = findTaskIndexById(updatedTasks, id);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
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
  return (
    <div className={'content'}>
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleChangeInput={handleChangeInput}
        taskInput={taskInput}
        handleAddTask={handleAddTask}
      />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleDoneTask={handleDoneTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default Content;
