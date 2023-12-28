import './Content.scss';
function Content() {
  return (
    <div className={'content'}>
      <button>Add task</button>
      <div>
        <ul>
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
