import './TaskList.scss';
import '/src/styles/components/_checkbox.scss';
import '/src/styles/components/_icon.scss';

function TaskList({ tasks, setTasks }) {
  function handleTaskDone(id) {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
    setTasks(updatedTasks);
  }
  const handleDeleteTask = (id) => {
    const updatedTasks = [...tasks]; //to avoid directly modifying the original array
    const index = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <ul className={'task-list'}>
        {tasks.map((task, index) => (
          <li className={`items ${task.done ? 'done' : ''}`} key={task.id}>
            <div className={'icon'} onClick={() => handleDeleteTask(task.id)}>
              <img src={'/src/assets/deleteicon.svg'} alt={'deleteicon'} />
            </div>
            <div className={'icon'}>
              <input
                className={'checkbox'}
                type={'checkbox'}
                id={'taskdone'}
                name={'checkbox'}
                onChange={() => handleTaskDone(task.id)}
              />
            </div>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
