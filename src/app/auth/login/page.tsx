'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import LoginTab from '@/Component/Auth/Tabs/LoginTab';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Logins = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard/ecommerce");
    }
  }, [session, router]);

  if (session) return null;
  return (
    <Container fluid={true} className='p-0'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div className='login-main login-tab'>
              <TabContent className='content-login'>
                <TabPane>
                  <LoginTab />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;
