import './_main.scss';

import NavBar from './componenets/NavBar.jsx';
import Content from './componenets/Content.jsx';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  let pendingTasksCounter = tasks.filter((task) => task.done === false).length;
  return (
    <>
      <NavBar pendingTasksCounter={pendingTasksCounter} />
      <Content tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
