import TaskCounter from './TaskCounter.jsx';
import './NavBar.scss';

function NavBar() {
  return (
    <div className={'nav-bar'}>
      <div className={'flex'}>
        <p>Hello user</p>
        <TaskCounter />
      </div>
      <div>MiniTo-DoMal</div>
    </div>
  );
}

export default NavBar;
