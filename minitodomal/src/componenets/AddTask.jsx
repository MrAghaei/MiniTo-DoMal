function AddTask({ taskInput, handleInputChange, handleAddTask }) {
  return (
    <div>
      <input
        type={'text'}
        value={taskInput}
        onChange={handleInputChange}
        placeholder={'enter task name'}
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
}

export default AddTask;
