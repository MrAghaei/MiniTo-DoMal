import './_main.scss';

import NavBar from './componenets/NavBar.jsx';
import Content from './componenets/Content.jsx';
import { useEffect, useState } from 'react';
import { localStorageKey } from './models/local-storage-key.js';
function App() {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem(localStorageKey);
    return localData ? JSON.parse(localData) : [];
  });

  let pendingTasksCounter = tasks.filter((task) => task.done === false).length;
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    console.log('tasks saved');
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <NavBar pendingTasksCounter={pendingTasksCounter} />
      <Content tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
