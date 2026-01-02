import CardHeaderComponent from '../Common/CardHeader';
import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import Chart from 'react-apexcharts';
import Image from 'next/image';
import { AssetsImagePath, New, Today, TodayTotalRevenue, Tomorrow, UpdatedProduct } from '@/Constant';
import { AcivityChart } from '@/Data/Apexchart';

const TimelineCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderComponent title='Activity Timeline' subtitle='Yearly User 24.65k' settingIcon={true} />
      </CardHeader>
      <CardBody>
        <div className='chart-main activity-timeline update-line'>
          <Media>
            <div className='activity-line'></div>
            <div className='activity-dot-primary'></div>
            <Media className='media-body d-block'>
              <h6>
                {' '}
                <span className='font-primary'>20-04-2021</span>
                {Today}
              </h6>
              <h5>
                {UpdatedProduct}
                <i className='fa fa-circle circle-dot-primary pull-right'></i>
              </h5>
              <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
            </Media>
          </Media>
          <Media>
            <div className='activity-dot-primary'></div>
            <Media className='media-body d-block'>
              <h6>
                {' '}
                <span className='font-primary'>20-04-20121</span>
                {Today}
                <span className='badge pill-badge-primary m-l-10'>{New}</span>
              </h6>
              <h5>
                James just like your product <i className='fa fa-circle circle-dot-primary pull-right'></i>
              </h5>
              <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
              <ul className='timeline-pro flex-row'>
                <li>
                  <Image className='img-fluid' height={37} width={76} src={`${AssetsImagePath}/dashboard-2/11.png`} alt='Product-1' unoptimized/>
                </li>
                <li>
                  <Image className='img-fluid' src={`${AssetsImagePath}/dashboard-2/10.png`} height={27} width={76} alt='Product-1' unoptimized/>
                </li>
              </ul>
            </Media>
          </Media>
          <Media>
            <div className='activity-dot-primary'></div>
            <Media className='media-body d-block'>
              <h6>
                {' '}
                <span className='font-primary'>20-04-20121</span>
                {Today}
              </h6>
              <h5>
                Jihan Doe just like your product<i className='fa fa-circle circle-dot-primary pull-right'></i>
              </h5>
              <p>Vestibulum nec mi suscipit, dapibus purus ane.</p>
            </Media>
          </Media>
          <Media>
            <Media className='media-body d-block'>
              <div className='tomorrow-sec'>
                <p>{Tomorrow}</p>
              </div>
            </Media>
          </Media>
          <Media>
            <div className='activity-dot-primary'></div>
            <Media className='media-body d-block'>
              <h6>
                {' '}
                <span className='font-primary'>20-04-20121</span>
                {Tomorrow}
              </h6>
              <h5>
                {TodayTotalRevenue}
                <i className='fa fa-circle circle-dot-primary pull-right'></i>
              </h5>
              <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
            </Media>
          </Media>
          <Media>
            <div className='activity-dot-primary'></div>
            <Media className='media-body d-block'>
              <div className='hospital-small-chart'>
                <div id='column-chart'>
                  <Chart options={AcivityChart.options} series={AcivityChart.series} type='bar' height={100} />
                </div>
              </div>
            </Media>
          </Media>
        </div>
      </CardBody>
    </Card>
  );
};

export default TimelineCard;
