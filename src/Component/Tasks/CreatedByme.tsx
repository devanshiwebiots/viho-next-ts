import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CardBody, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Javascript, NoTasksFound } from '@/Constant';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TaskReducerTypes } from './TasksReducerTypes';
import { RemoveTask } from '@/Redux/Slices/TaskReducer';
import { RootState } from '@/Redux/ReduxStore';
import { CreatedBymePropTypes } from '@/Type/SideBarType';

const CreatedByme = () => {
  const { allTask } = useSelector((state: RootState) => state.TaskSlice);
  const dispatch = useDispatch();
  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(RemoveTask(userId));
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
    <CardBody className='p-0'>
      <div className='taskadd'>
        <div className='table-responsive table-borderless'>
          <Table borderless>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {allTask && allTask.length ? (
                allTask.map((tasklistdata: CreatedBymePropTypes) => {
                  return (
                    <tr key={tasklistdata.id}>
                      <td>
                        <h6 className='task_title_0'>{tasklistdata.title}</h6>
                        <p className='project_name_0'>{tasklistdata.collection}</p>
                      </td>
                      <td>
                        <p className='task_desc_0'>{tasklistdata.desc}</p>
                      </td>
                      <td>
                        <a className='me-2' href={Javascript}>
                          <Link />
                        </a>
                        <a href={Javascript}>
                          <MoreHorizontal />
                        </a>
                      </td>
                      <td>
                        <a href={Javascript} onClick={() => deleteTask(tasklistdata.id)}>
                          <Trash2 />
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <div className='no-favourite'>
                      <span>{NoTasksFound}</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </CardBody>
  );
};

export default CreatedByme;
