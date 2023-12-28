import '/src/styles/components/_btn.scss';
import '/src/styles/components/_input.scss';
import './AddTask.scss';

function AddTask({ taskInput, handleInputChange, handleAddTask }) {
  return (
    <div className={'add-task'}>
      <input
        className={'input-main'}
        type={'text'}
        value={taskInput}
        onChange={handleInputChange}
        placeholder={'enter task name'}
      />
      <button className={'btn-main'} onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
