import { Update } from '@/Constant';
import { RootState } from '@/Redux/ReduxStore';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';

const ProfileGreeting = () => {
  return (
    <Card className='profile-greeting'>
      <CardHeader className='pb-0'></CardHeader>
      <CardBody className='text-center p-t-0'>
        <h3 className='font-light'>Welcome Back, John!!</h3>
        <p>Welcome to the viho Family!we are glad that you are visite this dashboard.we will be happy to help you grow your business.</p>
        <Link href={`/users/userProfile`}>
          <Button color='light'>{Update}</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProfileGreeting;
