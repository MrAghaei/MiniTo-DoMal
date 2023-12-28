import './TaskCounter.scss';
function TaskCounter({ tasks }) {
  return <div className={'task-counter'}>{tasks.length} task pending</div>;
}

export default TaskCounter;
