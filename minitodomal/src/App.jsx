import './_main.scss';

import NavBar from './componenets/NavBar.jsx';
import Content from './componenets/Content.jsx';
import { useEffect, useState } from 'react';
import { getTaskData, setTasksData } from './services/task.service.js';
function App() {
  const [tasks, setTasks] = useState(() => getTaskData());

  let pendingTasksCounter = tasks.filter((task) => task.done === false).length;
  useEffect(() => setTasksData(tasks), [tasks]);

  return (
    <>
      <NavBar pendingTasksCounter={pendingTasksCounter} />
      <Content tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
