'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { Fragment } from 'react';
import { Container } from 'reactstrap';
import dynamic from 'next/dynamic';

const ContainerChart = dynamic(() => import("@/Component/Widgets/Chart/ContainerChart"), { ssr: false });

const ChartComponent = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Chart' parent='Widgets' title='Chart' />
      <Container fluid={true} className='chart-widget'>
        <ContainerChart/>
      </Container>
    </Fragment>
  );
};

export default ChartComponent;
