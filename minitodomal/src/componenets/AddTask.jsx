import '/src/styles/components/_btn.scss';
import '/src/styles/components/_input.scss';
import './AddTask.scss';
import { useState } from 'react';

function AddTask({ addTaskEvent }) {
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = (event) => {
    setTaskInput(event.target.value);
  };
  const handleAddTask = () => {
    addTaskEvent(taskInput);
    setTaskInput('');
  };
  return (
    <div className={'add-task'}>
      <input
        className={'input-main'}
        type={'text'}
        value={taskInput}
        onChange={handleChangeInput}
        placeholder={'enter task name'}
      />
      <button className={'btn-main'} onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
