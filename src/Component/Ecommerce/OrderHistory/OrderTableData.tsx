import React, { Fragment } from 'react';
import { CardBody } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { OrderHistoryTableColumnsData, OrderHistoryTableData } from '@/Data/EcommerceData/OrderHistoryTable';

const OrderTableData = () => {
  return (
    <CardBody>
      <div className='order-history table-responsive'>
        <DataTable style={{ border: '1px solid $light-gray' }} pagination paginationServer data={OrderHistoryTableData} columns={OrderHistoryTableColumnsData} />
      </div>
    </CardBody>
  );
};
export default OrderTableData;
