'use client';

import DefultStylingClass from '../../../../Component/ReactStrapTables/StylingTabs/DefultStyling';
import TableBackgroundClass from '../../../../Component/ReactStrapTables/StylingTabs/TableBackground';
import TableHeadOptionsClass from '../../../../Component/ReactStrapTables/StylingTabs/TableHeadOptions';
import TableFooterStylingClass from '../../../../Component/ReactStrapTables/StylingTabs/TableFooterStyling';
import CustomTableColorClass from '../../../../Component/ReactStrapTables/StylingTabs/CustomTableColor';
import CustomHoverClass from '../../../../Component/ReactStrapTables/StylingTabs/CustomeHover';
import { Container, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTableData } from '@/Redux/Slices/TableDataSlice';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const StylingTabsContainer = () => {
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
      <Breadcrumbs parent='Tables' title='Styling Tables' mainTitle='Styling Tables' />
      <Container fluid={true}>
        <Row>
          <DefultStylingClass />
          <TableHeadOptionsClass />
          <TableBackgroundClass />
          <TableFooterStylingClass />
          <CustomTableColorClass />
          <CustomHoverClass />
        </Row>
      </Container>
    </>
  );
};

export default StylingTabsContainer;
