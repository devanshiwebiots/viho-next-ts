import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setAllTodo } from '@/Redux/Slices/TodoReducer';

const TodoCheckbox = () => {
  const [markAll, setMarkAll] = useState(true);
  const { allTodos } = useSelector((state: any) => state.ToDoSlice);
  const dispatch = useDispatch();
  const markAllStatus = () => {
    setMarkAll(!markAll);
    if (markAll === true) {
      toast.error('All Task In-Completed !');
    } else {
      toast.success('All Task Completed !');
    }
    const updateStatus = allTodos.reduce((cartAcc: any, item: any) => {
      if (markAll === false) {
        cartAcc.push({ ...item, status: 'completed' });
      } else {
        cartAcc.push({ ...item, status: 'pending' });
      }
      return cartAcc;
    }, []);

    dispatch(setAllTodo(updateStatus));
  };
  return (
    <div className='mark-all-tasks'>
      <div className='mark-all-tasks-container'>
        <span className='mark-all-btn  d-flex align-items-center gap-1' role='button'>
          <span className='btn-label txt-danger'>{'Mark all as finished'}</span>
          <span className='action-box completed' onClick={markAllStatus}>
            {markAll && (
              <i className='icon'>
                <i className='icon-check' />
              </i>
            )}
          </span>
        </span>
      </div>
    </div>
  );
};
export default TodoCheckbox;
