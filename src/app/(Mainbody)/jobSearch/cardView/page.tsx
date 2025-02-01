'use client';
import { Container, Row } from 'reactstrap';
import Sidebar from '../../../../Component/Job/JobSearch/Sidebar';
import { Col } from 'react-bootstrap';
import CardsClass from '../../../../Component/Job/JobSearch/Cards';
import CardsPagination from '../../../../Component/Job/JobSearch/Cards/CardsPagination';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const JobSearchContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Cards View' parent='Job Search' title='Cards View' />
      <Container fluid={true}>
        <Row>
          <Col xl='3' className='xl-40'>
            <div className='default-according style-1 faq-accordion job-accordion'>
              <Sidebar />
            </div>
          </Col>
          <Col xl='9' className='xl-60'>
            <Row>
              <CardsClass />
              <CardsPagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobSearchContainer;
