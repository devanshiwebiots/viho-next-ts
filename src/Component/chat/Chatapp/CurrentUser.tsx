import { AssetsImagePath, ChatStatus, MarkJecno } from '@/Constant';
import Image from 'next/image';

const CurrentUser = () => {
  return (
    <div className='d-flex'>
      <Image width={52} height={52} className='rounded-circle user-image' src={`${AssetsImagePath}/user/12.png`} alt='user' unoptimized/>
      <div className='about'>
        <div className='name f-w-600'>{MarkJecno}</div>
        <div className='status'>{ChatStatus}</div>
      </div>
    </div>
  );
};

export default CurrentUser;
