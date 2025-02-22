import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody } from 'reactstrap';
import { AddBookmarks, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from '@/Constant';
import { useDispatch } from 'react-redux';
import { BookMarkModelType } from '@/Type/SideBarType';
import { addNewBookmark } from '@/Redux/Slices/BookMarkReducer';

const BookmarkModal = ({ addToggle, value }: BookMarkModelType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit1 = (data: any) => {
    if (data !== '') {
      dispatch(addNewBookmark({ data, img_url: 'lightgallry/01.jpg' }));
    }
  };
  return (
    <Modal isOpen={value} toggle={addToggle} size='lg' className='modal-bookmark'>
      <div className='modal-header'>
        <h5 className='modal-title'>{AddBookmarks}</h5>
        <Button color='transprant' className='btn-close' onClick={addToggle} type='button'></Button>
      </div>
      <ModalBody>
        <Form className='form-bookmark needs-validation' onSubmit={handleSubmit(onSubmit1)}>
          <div className='form-row'>
            <FormGroup className='col-md-12'>
              <Label>{WebUrl}</Label>
              <input className='form-control' type='text' autoComplete='off' {...register('url', { required: true })} />
              <span style={{ color: 'red' }}>{errors.url && 'Url is required'}</span>
            </FormGroup>
            <FormGroup className='col-md-12'>
              <Label>{Title}</Label>
              <input className='form-control' type='text' autoComplete='off' {...register('title', { required: true })} />
              <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
            </FormGroup>
            <FormGroup className='col-md-12'>
              <Label>{Description}</Label>
              <input className='form-control' type='textarea' autoComplete='off' {...register('desc', { required: true })} />
              <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
            </FormGroup>
            <FormGroup className='col mb-0'>
              <Label>{Group}</Label>
              <br />
              <select className='form-control digits' name='group'>
                <option value='bookmark'>{MyBookmarks}</option>
              </select>
            </FormGroup>
            <FormGroup className='col mb-0'>
              <Label>{Collection}</Label>
              <br />
              <select className=' form-control digits' name='collection'>
                <option value='general'>{General}</option>
                <option value='fs'>{'fs'}</option>
              </select>
            </FormGroup>
          </div>
          <Button color='secondary' type='submit'>
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color='primary' onClick={addToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default BookmarkModal;
