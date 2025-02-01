'use client';

import { useDispatch } from 'react-redux';
import DefaultTableClass from '../../../../Component/ReactStrapTables/SizingTables/DefaultTable';
import ExtraLargeTablesClass from '../../../../Component/ReactStrapTables/SizingTables/ExtraLargeTables';
import ExtraSmallTableClass from '../../../../Component/ReactStrapTables/SizingTables/ExtraSmallTable';
import LargeTableClass from '../../../../Component/ReactStrapTables/SizingTables/LargeTable';
import SmallTableClass from '../../../../Component/ReactStrapTables/SizingTables/SmallTable';
import { Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import { addTableData } from '@/Redux/Slices/TableDataSlice';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const SizingTablesContainer = () => {
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
      <Breadcrumbs parent='Tables' title='Sizing Tables' mainTitle='Sizing Tables' />
      <Container fluid={true}>
        <Row>
          <ExtraLargeTablesClass />
          <LargeTableClass />
          <DefaultTableClass />
          <SmallTableClass />
          <ExtraSmallTableClass />
        </Row>
      </Container>
    </>
  );
};

export default SizingTablesContainer;
