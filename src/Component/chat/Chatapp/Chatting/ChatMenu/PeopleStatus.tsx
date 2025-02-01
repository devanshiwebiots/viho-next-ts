import { Input } from 'reactstrap';
import { Active, CallParagraph, CallParagraph2 } from '@/Constant';

const PeopleStatus = () => {
  return (
    <>
      <div className='people-list'>
        <div className='search'>
          <form className='theme-form'>
            <div className='mb-3'>
              <Input type='text' placeholder='Write Status...' />
              <i className='fa fa-pencil' />
            </div>
          </form>
        </div>
      </div>
      <div className='status'>
        <p className='font-dark'>{Active}</p>
        <hr />
        <p>
          {CallParagraph} &nbsp; <i className='icofont icofont-emo-heart-eyes font-danger f-20' /> <i className='icofont icofont-emo-heart-eyes font-danger f-20 m-l-5' />
        </p>
        <hr />
        <p>
          {CallParagraph2} &nbsp;
          <i className='icofont icofont-emo-rolling-eyes font-success f-20' />
        </p>
      </div>
    </>
  );
};

export default PeopleStatus;
