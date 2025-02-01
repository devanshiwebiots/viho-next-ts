'use client';

import LeftSection from '@/Component/bonus-ui/Tour/LeftSection';
import RightSection from '@/Component/bonus-ui/Tour/RightSection';
import UserProfile from '@/Component/bonus-ui/Tour/UserProfile';
import React from 'react';
import { Container, Row } from 'reactstrap';

const page = () => {
  return (
    <Container fluid>
      <div className='user-profile tour'>
        <Row>
          <UserProfile />
          <LeftSection />
          <RightSection />
        </Row>
      </div>
    </Container>
  );
};

export default page;
