import './Content.scss';
import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

function Content({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = (event) => {
    setTaskInput(event.target.value);
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

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Content;
