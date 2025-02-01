import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';
import { Month, Today, TotalSelling } from '@/Constant';
import { TotalSellingChart } from '@/Data/Apexchart';

const TotalSellingCard = () => {
  return (
    <Card>
      <CardHeader className='pb-0'>
        <div className='header-top d-sm-flex justify-content-between align-items-center'>
          <h5>{TotalSelling}</h5>
          <div className='center-content'>
            <ul className='week-date flex-row'>
              <li className='font-primary'>{Today}</li>
              <li>{Month}</li>
            </ul>
          </div>
        </div>
      </CardHeader>
      <div className='chart-block p-0'>
        <div id='chart-dash-2-line'>
          <Chart options={TotalSellingChart.options} series={TotalSellingChart.series} type='area' height={495} />
        </div>
      </div>
    </Card>
  );
};

export default TotalSellingCard;
