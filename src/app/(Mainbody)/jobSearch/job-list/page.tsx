'use client';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from '@/Component/Job/JobSearch/Sidebar';
import ListViewCard from '@/Component/Job/ListView/ListViewCard';
import CardsPagination from '@/Component/Job/JobSearch/Cards/CardsPagination';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const JobListViewContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='List View' parent='Job Search' title='List View' />
      <Container fluid={true}>
        <Row>
          <Col xl='3' className='xl-40'>
            <div className='default-according style-1 faq-accordion job-accordion'>
              <Sidebar />
            </div>
          </Col>
          <Col xl='9' className='xl-60'>
            <Row>
              <ListViewCard />
              <CardsPagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobListViewContainer;
