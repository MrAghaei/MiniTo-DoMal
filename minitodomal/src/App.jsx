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

  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
  //   console.log('tasks loaded');
  //   console.log(storedTasks);
  //   console.log(tasks);
  //
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  return (
    <>
      <NavBar pendingTasksCounter={pendingTasksCounter} />
      <Content tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
