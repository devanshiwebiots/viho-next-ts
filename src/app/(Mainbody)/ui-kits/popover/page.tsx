'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Basic from '@/Component/UiKits/Popover/Basic';
import Directions from '@/Component/UiKits/Popover/Direction';
import HtmlContents from '@/Component/UiKits/Popover/HtmlConten';
import { Container, Row } from 'reactstrap';

const PopoverContainer = () => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <Container fluid={true}>
      <Breadcrumbs mainTitle='Popover' parent='Ui Kits' title='Popover' />
      <Row className='popover-main'>
        <Basic />
        <Directions />
        <HtmlContents />
      </Row>
    </Container>
  );
};

export default PopoverContainer;
