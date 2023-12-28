import './Content.scss';
import { useState } from 'react';

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
  return (
    <div className={'content'}>
      <div>
        <input
          type={'text'}
          value={taskInput}
          onChange={handleInputChange}
          placeholder={'enter task name'}
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
