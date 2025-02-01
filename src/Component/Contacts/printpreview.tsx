import Image from 'next/image';
import { EmailAddress, General } from '@/Constant';
import { PrintPreviewprops, userCallbackUser } from './ContactType';

const printpreview = ({ selectedUser }: PrintPreviewprops) => {
  return (
    <div className='profile-mail pt-0' id='DivIdToPrint'>
      <div className='d-flex align-items-center'>
        <Image height={100} width={100} className='img-100 img-fluid m-r-20 rounded-circle' id='updateimg' src={`${selectedUser.avatar}`} alt='' />
        <div className='flex-grow-1 mt-0'>
          <h5>
            <span id='printname'>{selectedUser.name} </span>
            <span id='printlast'>{selectedUser.surname}</span>
          </h5>
          <p id='printmail'>
            {selectedUser.name}
            {'@gmail.com'}
          </p>
        </div>
      </div>
      <div className='email-general'>
        <h6>{General}</h6>
        <p>
          {EmailAddress}:{' '}
          <span className='font-primary' id='mailadd'>
            {selectedUser.surname}
            {'@gmail.com'}{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default printpreview;
