'use client';
import { Container, Row } from 'reactstrap';
import BasicCommon from '../../../../../Component/bonus-ui/BasicCard/BasicCommon';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BasicCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Basic card' parent='Bonus Ui' title='Rating' />
      <Container fluid={true} className='basic-cards'>
        <Row>
          <BasicCommon />
        </Row>
      </Container>
    </>
  );
};

export default BasicCardContainer;
