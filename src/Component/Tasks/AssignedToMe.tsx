import { Link, MoreHorizontal, Printer, Trash2 } from 'react-feather';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Javascript, NoTasksFound, Print } from '@/Constant';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TaskReducerTypes } from './TasksReducerTypes';
import { AssignedToMeClassType } from '@/Type/SideBarType';
import { RemoveTask } from '@/Redux/Slices/TaskReducer';
import { RootState } from '@/Redux/ReduxStore';

const AssignedToMeClass = ({ title }: AssignedToMeClassType) => {
  const { newTask } = useSelector((state: RootState) => state.TaskSlice);
  const dispatch = useDispatch();

  const deleteTask = (taskId: number) => {
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
        dispatch(RemoveTask(taskId));
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h6 className='mb-0 f-w-600'>{title}</h6>
        <a href={Javascript}>
          <Printer className='me-2' />
          {Print}
        </a>
      </CardHeader>
      <CardBody className='p-0'>
        <div className='taskadd'>
          <div className='table-responsive'>
            <Table>
              <tbody>
                {newTask && newTask.length ? (
                  newTask.map((taskdata: any, id: number) => {
                    return (
                      <tr key={id}>
                        <td>
                          <h6 className='task_title_0'>{taskdata.title}</h6>
                          <p className='project_name_0'>{taskdata.collection}</p>
                        </td>
                        <td>
                          <p className='task_desc_0'>{taskdata.desc}</p>
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
                          <a href={Javascript} onClick={() => deleteTask(id)}>
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
    </Card>
  );
};
export default AssignedToMeClass;
