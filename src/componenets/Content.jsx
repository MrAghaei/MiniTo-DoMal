import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content({ tasks, setTasks }) {
  const findTaskIndexById = (tasks, id) => {
    return tasks.findIndex((task) => task.id === id);
  };

  const handleDoneTask = (id) => {
    const updatedTasks = [...tasks];
    const index = findTaskIndexById(updatedTasks, id);
    updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
    setTasks(updatedTasks);
  };
  const handleDeleteTask = (id) => {
    const updatedTasks = [...tasks]; //to avoid directly modifying the original array
    const index = findTaskIndexById(updatedTasks, id);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const handleAddTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <div className={'content'}>
      <AddTask addTaskEvent={handleAddTask} />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        doneTaskEvent={handleDoneTask}
        deleteTaskEvent={handleDeleteTask}
      />
    </div>
  );
}

export default Content;
