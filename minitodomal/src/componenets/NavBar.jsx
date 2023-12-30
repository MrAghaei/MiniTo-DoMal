import TaskCounter from './TaskCounter.jsx';
import './NavBar.scss';

function NavBar({ tasks }) {
  return (
    <div className={'nav-bar'}>
      <div className={'flex'}>
        <p>Hello user</p>
        <TaskCounter tasks={tasks} />
      </div>
      <img className={'logo'} src={'../../public/checklist.png'} />
      <div>MiniTo-DoMal</div>
    </div>
  );
}

export default NavBar;
