'use client';
import { Container, Row } from 'reactstrap';
import PagiNations from '../../../../Component/bonus-ui/Pagination/PagiNations';
import PaginationAlignmentClass from '../../../../Component/bonus-ui/Pagination/PaginationAlignment';
import PaginationActiveDisabledClass from '../../../../Component/bonus-ui/Pagination/PaginationActiveDisabled';
import PaginationColorClass from '../../../../Component/bonus-ui/Pagination/PaginationColor';
import PaginationSizingClass from '../../../../Component/bonus-ui/Pagination/PaginationSizing';
import PaginationWithIconsClass from '../../../../Component/bonus-ui/Pagination/PaginationWithIconsClass';
const PaginationContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <PagiNations />
        <PaginationWithIconsClass />
        <PaginationAlignmentClass />
        <PaginationActiveDisabledClass />
        <PaginationColorClass />
        <PaginationSizingClass />
      </Row>
    </Container>
  );
};

export default PaginationContainer;
