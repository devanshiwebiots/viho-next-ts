import { LogOutConst } from '@/Constant';
import { signOut } from 'next-auth/react';
import { LogOut } from 'react-feather';
import { Button } from 'reactstrap';

const LogOutClass = () => {
  const logOutUser = () => {
   signOut()
  };
  return (
    <li className='onhover-dropdown p-0'>
      <Button onClick={logOutUser} color='primary-light'>
        <a>
          <LogOut />
          {LogOutConst}
        </a>
      </Button>
    </li>
  );
};

export default LogOutClass;
