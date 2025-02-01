'use client';

import { Col, Container, Row } from 'reactstrap';
import Sidebar from '../../../../Component/Job/JobSearch/Sidebar';
import MainCard from '../../../../Component/Job/jobDetails/MainCard';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const JobDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Job Details' parent='Job Search' title='Job Details' />
      <Container fluid={true}>
        <Row>
          <Col xl='3' className='xl-40'>
            <div className='default-according style-1 faq-accordion job-accordion'>
              <Sidebar />
            </div>
          </Col>
          <Col xl='9' className='xl-60'>
            <MainCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDetailsContainer;
