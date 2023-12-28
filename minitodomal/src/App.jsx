import './_main.scss';

import NavBar from './componenets/NavBar.jsx';
import Content from './componenets/Content.jsx';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <NavBar tasks={tasks} />
      <Content tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
