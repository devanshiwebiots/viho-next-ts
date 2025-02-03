'use client';
import { Container, Row } from 'reactstrap';
import Dropzone1 from '../../../../Component/bonus-ui/Dropzone/Dropzone1';
import Dropzone2 from '../../../../Component/bonus-ui/Dropzone/Dropzone2';
import Dropzone3 from '../../../../Component/bonus-ui/Dropzone/Dropzone3';
import Dropzone4 from '../../../../Component/bonus-ui/Dropzone/Dropzone4';
import Dropzone5 from '../../../../Component/bonus-ui/Dropzone/Dropzone5';

const DropzoneContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Dropzone1 />
        <Dropzone2 />
        <Dropzone3 />
        <Dropzone4 />
        <Dropzone5 />
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
