'use client';

import { Container, Row } from 'reactstrap';
import LeftSide from '../../../Component/Contacts/LeftSide';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const ContactsContainer = () => {
  return (
    <>
      <Breadcrumbs parent='Contact' title='Contact' mainTitle='Contact' />
      <Container fluid={true}>
        <div className='email-wrap bookmark-wrap contacts-items'>
          <Row>
            <LeftSide />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ContactsContainer;
