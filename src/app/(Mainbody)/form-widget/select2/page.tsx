'use client';

import FullColored from '../../../../Component/FormWidgets/Select2/FullColored';
import { Container, Row } from 'reactstrap';
import Select2Card from '../../../../Component/FormWidgets/Select2/Select-2/index';
import OutlineColorCard from '../../../../Component/FormWidgets/Select2/OutlineColor/index';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const Select2Container = () => {
  return (
    <>
      <Breadcrumbs parent='Forms' title='Select-2' mainTitle='Select-2' />
      <Container fluid={true}>
        <div className='select2-drpdwn'>
          <Row>
            <Select2Card />
            <OutlineColorCard />
            <FullColored />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Select2Container;
