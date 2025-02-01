import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';
import { timelineChart } from '@/Data/Apexchart';
import { InvoiceOverview } from '@/Constant';

const InvoiceCardClass = () => {
  return (
    <Card>
      <CardHeader>
        <div className='header-top d-sm-flex justify-content-between align-items-center'>
          <h5>{InvoiceOverview}</h5>
          <div className='center-content'>
            <p className='d-sm-flex align-items-center'>
              <span className='m-r-10'>$5,56548k</span>
              <i className='toprightarrow-primary fa fa-arrow-up m-r-10'></i>94% More Than Last Year
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody className='p-0'>
        <div id='timeline-chart'>
          <Chart options={timelineChart.options} series={timelineChart.series} type='line' height={445} />
        </div>
      </CardBody>
    </Card>
  );
};

export default InvoiceCardClass;
