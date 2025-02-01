'use client';

import React, { Fragment } from 'react';
import CashonDelivery from '../../../../Component/Ecommerce/PaymentDetails/Cod';
import CreditCards from '../../../../Component/Ecommerce/PaymentDetails/CreditCard';
import DebitCards from '../../../../Component/Ecommerce/PaymentDetails/DebitCard';
import EMIs from '../../../../Component/Ecommerce/PaymentDetails/Emi';
import NetBankings from '../../../../Component/Ecommerce/PaymentDetails/NetBanking';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const PaymentDetailContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='ECommerce' title='Products Details' mainTitle='Products Details' />
      <Container fluid={true} className='credit-card'>
        <Row>
          <CreditCards />
          <DebitCards />
          <CashonDelivery />
          <EMIs />
          <NetBankings />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PaymentDetailContain;
