import { productColumns, productData } from '@/Data/EcommerceData';
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';

const ProductTableData = () => {
  return (
    <div className='table-responsive product-table'>
      <DataTable noHeader pagination paginationServer columns={productColumns} data={productData} />
    </div>
  );
};
export default ProductTableData;
