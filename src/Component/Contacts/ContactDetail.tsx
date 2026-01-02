import { Fragment, useCallback, useState } from 'react';
import SweetAlert from 'sweetalert2';
import { Name, MobileNo, EmailAddress, History, Edit, Delete, Print, General, Javascript } from '@/Constant';
import SearchNotFoundClass from './SearchNotFoundClass';
import PrintModal from './PrintModal';
import { useDispatch } from 'react-redux';
import { ContactDetailsClassPropsType, UserUpdateType, userCallbackUser } from './ContactType';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Image from 'next/image';
import { deletedUser, setTempId } from '@/Redux/Slices/ContactReducer';

const ContactDetailsClass = ({ selectedUser, userEditCallback }: ContactDetailsClassPropsType) => {
  const [printmodal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printmodal);
  const dispatch = useDispatch();
  const toggleCallback = useCallback((toggle: boolean) => {
    setPrintModal(toggle);
  }, []);

  const history = () => {
    document.querySelector('.history')?.classList.add('show');
  };

  const editUsers = (usersData: any) => {
    dispatch(setTempId(usersData.id));
    userEditCallback(true, usersData);
  };

  const deleteUser = (userId: number | undefined) => {
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
        dispatch(deletedUser(userId));
        SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };

  return (
    <Fragment>
      {selectedUser ? (
        <div className='profile-mail'>
          <div className='d-flex'>
            <Image height={100} width={100} className=' m-r-20 rounded-circle update_img_0' src={`${selectedUser.avatar}`} alt='' unoptimized/>
            <div className='flex-grow-1 mt-0'>
              <h5>
                <span className='first_name_0'>{selectedUser.name}</span> <span className='last_name_0'>{selectedUser.surname}</span>
              </h5>
              <p className='email_add_0'>
                {selectedUser.name}
                {'@gmail.com'}
              </p>
              <ListGroup className='d-flex gap-2 flex-row'>
                <ListGroupItem>
                  <a href={Javascript} onClick={() => editUsers(selectedUser)}>
                    {Edit}
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href={Javascript} onClick={() => deleteUser(selectedUser.id)}>
                    {Delete}
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href={Javascript} onClick={() => history()}>
                    {History}
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href={Javascript} onClick={() => printModalToggle()}>
                    {Print}
                  </a>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className='email-general'>
            <h6 className='mb-3'>{General}</h6>
            <ListGroup>
              <ListGroupItem>
                {Name} <span className='font-primary first_name_0'>{selectedUser.name}</span>
              </ListGroupItem>
              <ListGroupItem>
                {MobileNo} <span className='font-primary mobile_num_0'>{selectedUser.mobile}</span>
              </ListGroupItem>
              <ListGroupItem>
                {EmailAddress} <span className='font-primary email_add_0'>{`${selectedUser.name}@gmail.com`} </span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      ) : (
        <SearchNotFoundClass />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printmodal={printmodal} selectedUser={selectedUser} />}
    </Fragment>
  );
};

export default ContactDetailsClass;
