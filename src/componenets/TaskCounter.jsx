import './TaskCounter.scss';
function TaskCounter({ counter }) {
  return <div className={'task-counter'}>{counter} task pending</div>;
}

export default TaskCounter;
