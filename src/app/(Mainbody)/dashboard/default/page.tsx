'use client';

import dynamic from 'next/dynamic';
import { Container } from 'reactstrap';

const DefaultContainer = dynamic(() => import("@/Component/Dashboard/Default/DefaultContainer"), { ssr: false });

const Dashboard = () => {
  return (
    <Container fluid={true} className='dashboard-default-sec'>
      <DefaultContainer/>
    </Container>
  );
};

export default Dashboard;
