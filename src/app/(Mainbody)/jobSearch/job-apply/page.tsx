'use client';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from '@/Component/Job/JobSearch/Sidebar';
import JobApply from '@/Component/Job/JobApply/Form';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const JobApplyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Apply' parent='Job Search' title='Apply' />
      <Container fluid={true}>
        <Row>
          <Col xl='3' className='xl-40'>
            <div className='default-according style-1 faq-accordion job-accordion'>
              <Sidebar />
            </div>
          </Col>
          <Col xl='9' className='xl-60'>
            <JobApply />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobApplyContainer;
