'use client';

import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import { addTableData } from '@/Redux/Slices/TableDataSlice';
import HorizontalTableClass from '@/Component/ReactStrapTables/BorderTables/HorizontalTableClass';
import VerticalBordersClass from '@/Component/ReactStrapTables/BorderTables/VerticalBordersClass';
import BothBordedsClass from '@/Component/ReactStrapTables/BorderTables/BothBordedsClass';
import BorderlessClass from '@/Component/ReactStrapTables/BorderTables/BorderlessClass';
import DefaultTableClass from '@/Component/ReactStrapTables/BorderTables/DefaultTableClass';
import SolidBorderClass from '@/Component/ReactStrapTables/BorderTables/SolidBorderClass';
import DoubleBorderClass from '@/Component/ReactStrapTables/BorderTables/DoubleBorderClass';
import DottedBorderClass from '@/Component/ReactStrapTables/BorderTables/DottedBorderClass';
import DashedBorderClass from '@/Component/ReactStrapTables/BorderTables/DashedBorderClass';
import BorderBottomClass from '@/Component/ReactStrapTables/BorderTables/BorderBottomClass';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const BorderTablesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const result = await fetch('/api/TableDataRoute');
    const finalResult = await result.json();
    dispatch(addTableData(finalResult));
  };
  return (
    <>
      <Breadcrumbs parent='Tables' title='Border Table' mainTitle='Border Table' />
      <Container fluid={true}>
        <Row>
          <HorizontalTableClass />
          <VerticalBordersClass />
          <BothBordedsClass />
          <BorderlessClass />
          <DefaultTableClass />
          <SolidBorderClass />
          <DoubleBorderClass />
          <DottedBorderClass />
          <DashedBorderClass />
          <BorderBottomClass />
        </Row>
      </Container>
    </>
  );
};

export default BorderTablesContainer;
