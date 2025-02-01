'use client';
import { Container, Row } from 'reactstrap';
import ItemBullets from '../../../../Component/UiKits/Navs/ItemBullets';
import ActiveAndDisabledLinks from '../../../../Component/UiKits/Navs/ActiveAndDisabledLinks/ActiveAndDisabledLinks';
import InlineNav from '../../../../Component/UiKits/Navs/InlineNav/InlineNav';
import SubNav from '../../../../Component/UiKits/Navs/SubNav';
import SectionAndSeparator from '../../../../Component/UiKits/Navs/SectionAndSeparator';
import DefaultNav from '../../../../Component/UiKits/Navs/DefaultNav';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const NavsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle='Navs' parent='Ui Kits' title='Navs' />
      <Container fluid={true} className='navs-items'>
        <Row>
          <DefaultNav />
          <ItemBullets />
          <SectionAndSeparator />
          <ActiveAndDisabledLinks />
          <InlineNav />
          <SubNav />
        </Row>
      </Container>
    </>
  );
};

export default NavsContainer;
