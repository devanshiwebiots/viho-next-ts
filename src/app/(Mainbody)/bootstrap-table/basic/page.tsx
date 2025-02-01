'use client';

import BasicTableClass from '../../../../Component/ReactStrapTables/BaiscTable/BasicTableClass';
import InverseTableClass from '../../../../Component/ReactStrapTables/BaiscTable/InverseTableClass';
import HoverableRowsClass from '../../../../Component/ReactStrapTables/BaiscTable/HoverableRows';
import ContextualClasses from '../../../../Component/ReactStrapTables/BaiscTable/ContextualClasses';
import TextClass from '../../../../Component/ReactStrapTables/BaiscTable/TextClass';
import TableClass from '../../../../Component/ReactStrapTables/BaiscTable/TableClass';
import StripedRowClass from '../../../../Component/ReactStrapTables/BaiscTable/StripedRowClass';
import StripeInverseClass from '../../../../Component/ReactStrapTables/BaiscTable/StripInverseClass';
import CaptionClass from '../../../../Component/ReactStrapTables/BaiscTable/Caption';
import ResponsiveClass from '../../../../Component/ReactStrapTables/BaiscTable/ResponsiveClass';
import BreckpointClass from '../../../../Component/ReactStrapTables/BaiscTable/BreckpointClass';
import TableHeadClass from '../../../../Component/ReactStrapTables/BaiscTable/TableHeadClass';
import InversePrimaryClass from '../../../../Component/ReactStrapTables/BaiscTable/InversTableClass';
import { Container, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTableData } from '@/Redux/Slices/TableDataSlice';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BaiscTableComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const result = await fetch('/api/TableDataRoute');
    const finalResult = await result.json();
    console.log(finalResult);
    dispatch(addTableData(finalResult));
  };
  return (
    <>
      <Breadcrumbs parent='Tables' title='Basic Tables' mainTitle='Basic Tables' />

      <Container fluid={true}>
        <Row>
          <BasicTableClass />
          <InverseTableClass />
          <InversePrimaryClass />
          <HoverableRowsClass />
          <ContextualClasses />
          <TextClass />
          <TableClass />
          <TableHeadClass />
          <StripedRowClass />
          <StripeInverseClass />
          <CaptionClass />
          <ResponsiveClass />
          <BreckpointClass />
        </Row>
      </Container>
    </>
  );
};

export default BaiscTableComponent;
