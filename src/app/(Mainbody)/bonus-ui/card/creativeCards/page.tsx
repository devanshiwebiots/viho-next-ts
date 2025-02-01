'use client';

import React from 'react';
import { Row, Container } from 'reactstrap';
import CreativeCardsCommon from '../../../../../Component/bonus-ui/CreativeCard/themeCards';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const CreativeCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Creative card' parent='Bonus Ui' title='Rating' />
      <Container fluid={true} className='basic-cards'>
        <Row>
          <CreativeCardsCommon />
        </Row>
      </Container>
    </>
  );
};

export default CreativeCardContainer;
