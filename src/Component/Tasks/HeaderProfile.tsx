import Link from 'next/link';
import { MARKJENCO, MARKJENCOEMAIL } from '@/Constant';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';

const HeaderProfile = () => {
  return (
    <div className='d-flex'>
      <div className='media-size-email'>
        <Image height={52} width={52} className='me-3 rounded-circle' src={`${AssetsImagePath}/user/user.png`} alt='Image' unoptimized/>
      </div>
      <div className='flex-grow-1'>
        <h6 className='f-w-600'>
          <Link href={`/user/user-profile`}>{MARKJENCO}</Link>
        </h6>
        <p>{MARKJENCOEMAIL}</p>
      </div>
    </div>
  );
};

export default HeaderProfile;
