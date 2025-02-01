import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';

const GoogleCus = () => {
  const handlesubmit = () => {
    toast.error("This is only demo purpose, click on the Sign In button to login.");
  };
  return (
    <Button color='light' onClick={handlesubmit}>
      <i className='fa fa-google txt-googleplus'></i>
    </Button>
  );
};

export default GoogleCus;
