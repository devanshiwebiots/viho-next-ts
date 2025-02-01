import { AssetsImagePath, Experience, Follow, Javascript, New } from '@/Constant';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { Settings } from 'react-feather';
import { Badge } from 'reactstrap';

const SideBarProfile = () => {
  const { data: session } = useSession();
  return (
    <div className='sidebar-user text-center'>
      <a className='setting-primary' href={Javascript}>
        <Settings />
      </a>
      <Image height={90} width={90} className='img-90 rounded-circle' alt='Profile Image' src={session?.user?.image || `${AssetsImagePath}/dashboard/1.png`} />
      <div className='badge-bottom'>
        <Badge color='primary'>{New}</Badge>
      </div>
      <a href={Javascript}>
        <h6 className='mt-3 f-14 f-w-600'>{session?.user?.name || 'Emay Walter'}</h6>
      </a>
      <p className='mb-0 font-roboto'>Human Resources Department</p>
      <ul>
        <li>
          <span>
            <span className='counter'>19.8</span>k
          </span>
          <p>{Follow}</p>
        </li>
        <li>
          <span>2 year</span>
          <p>{Experience}</p>
        </li>
        <li>
          <span>
            <span className='counter'>95.2</span>k
          </span>
          <p>{Follow}</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBarProfile;
