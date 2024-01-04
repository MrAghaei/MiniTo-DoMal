import './TaskList.scss';
import '/src/styles/components/_checkbox.scss';
import '/src/styles/components/_icon.scss';

function TaskList({ tasks, deleteTaskEvent, doneTaskEvent }) {
  return (
    <div>
      <ul className={'task-list'}>
        {tasks.map((task, index) => (
          <li className={`items ${task.done ? 'done' : ''}`} key={task.id}>
            <div className={'icon'} onClick={() => deleteTaskEvent(task.id)}>
              <img src={'/src/assets/deleteicon.svg'} alt={'deleteicon'} />
            </div>
            <div className={'icon'}>
              <input
                className={'checkbox'}
                type={'checkbox'}
                id={'taskdone'}
                name={'checkbox'}
                onChange={() => doneTaskEvent(task.id)}
                checked={task.done}
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
