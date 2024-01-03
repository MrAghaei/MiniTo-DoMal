import '/src/styles/components/_btn.scss';
import '/src/styles/components/_input.scss';
import './AddTask.scss';

function AddTask({ taskInput, handleChangeInput, tasks, setTaskInput, setTasks, handleAddTask }) {
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
