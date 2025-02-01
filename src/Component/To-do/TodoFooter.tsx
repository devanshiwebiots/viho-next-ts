import { useState } from 'react';
import { AddNewTask, AddTask, Close } from '@/Constant';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { addNewTodo } from '@/Redux/Slices/TodoReducer';
const TodoFooter = () => {
  const [addNewTask, setAddNewTask] = useState(false);
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const addNewTaskHandle = () => {
    setAddNewTask(!addNewTask);
  };
  const handleNewTask = () => {
    if (task === '') {
      return;
    } else {
      dispatch(addNewTodo(task));
      setTask('');
    }
  };
  return (
    <div className='todo-list-footer'>
      <div className='add-task-btn-wrapper'>
        <span className={`add-task-btn ${addNewTask ? 'hide' : ''}`}>
          <Button color='primary' onClick={addNewTaskHandle}>
            <i className='icon-plus' /> {AddNewTask}
          </Button>
        </span>
      </div>
      <div className={`new-task-wrapper ${addNewTask ? 'visible' : ''} `}>
        <textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter new task here. . .' />
        <span className='btn btn-danger cancel-btn' onClick={() => setAddNewTask(!addNewTask)}>
          {Close}
        </span>
        <span className='btn btn-success ms-3 add-new-task-btn' onClick={handleNewTask}>
          {AddTask}
        </span>
      </div>
    </div>
  );
};

export default TodoFooter;
