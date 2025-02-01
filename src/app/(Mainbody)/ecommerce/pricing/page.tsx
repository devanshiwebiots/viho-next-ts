'use client';

import React, { Fragment } from 'react';
import Standards from '../../../../Component/Ecommerce/PricingMemberShip/Standard';
import StandardPricingcard from '../../../../Component/Ecommerce/PricingMemberShip/StandardProcingCard';
import { Card, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Pricing, SimplePricingCard } from '@/Constant';

const PricingMembershipContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Pricing' parent='ECommerce' title='Pricing' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeaderCommon title={SimplePricingCard} />
              <StandardPricingcard />
            </Card>
            <Card>
              <CardHeaderCommon title={Pricing} />
              <Standards />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default PricingMembershipContain;
