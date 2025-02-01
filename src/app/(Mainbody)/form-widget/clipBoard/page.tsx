'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import ClipboardHighlight from '../../../../Component/FormWidgets/Clipboard/ClipboardHighlight';
import ClipboardPara from '../../../../Component/FormWidgets/Clipboard/ClipboardPara';
import ClipboardText from '../../../../Component/FormWidgets/Clipboard/ClipboardText';
import ClipboardTextarea from '../../../../Component/FormWidgets/Clipboard/ClipboardTextarea';
import { Container, Row } from 'reactstrap';

const ClipboardContainer = () => {
  return (
    <>
      <Breadcrumbs parent='Forms' title='Clipboard' mainTitle='Clipboard' />
      <Container fluid={true}>
        <Row>
          <ClipboardText />
          <ClipboardTextarea />
          <ClipboardPara />
          <ClipboardHighlight />
        </Row>
      </Container>
    </>
  );
};

export default ClipboardContainer;
