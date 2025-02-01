'use client';

import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import EarningsCard from '../../../../Component/Widgets/General/EarningsCard';
import DatewidgetCard from '../../../../Component/Widgets/General/DateWidgetsCard';
import ClockCard from '../../../../Component/Widgets/General/ClockCard';
import WeatherCard from '../../../../Component/Widgets/General/WeatherCard';
import WidgetArrowCard from '../../../../Component/Widgets/General/WidgetArrowCard';
import WidgetsJoinsCard from '../../../../Component/Widgets/General/WidgetsJoinsCard';
import TestimonialCard from '../../../../Component/Widgets/General/TestimonialCard';
import RecentActivityCard from '../../../../Component/Widgets/General/RecentActivityCard';
import CustomCard from '../../../../Component/Widgets/General/CustomeCard';
import SocialWidgetsCard from '../../../../Component/Widgets/General/SocialWidgetsCard';
import BrowserWidgetCard from '../../../../Component/Widgets/General/BrowserWidgetCard';
import ProductCard from '../../../../Component/Widgets/General/ProductCard';
import EmployeeStatusCard from '../../../../Component/Widgets/General/EmployeeStatusCard';
import CalenderWidgetCard from '../../../../Component/Widgets/General/CalenderWidgetCard';
import ContactCard from '../../../../Component/Widgets/General/ContactCard';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const GeneralComponent = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='General Widget' parent='Widgets' title='General' />
      <Container fluid={true} className='general-widget'>
        <Row>
          <EarningsCard />
          <DatewidgetCard />
          <ClockCard />
          <WeatherCard />
          <WidgetArrowCard />
          <WidgetsJoinsCard />
          <TestimonialCard />
          <RecentActivityCard />
          <CustomCard />
          <SocialWidgetsCard />
          <BrowserWidgetCard />
          <ProductCard />
          <EmployeeStatusCard />
          <CalenderWidgetCard />
          <ContactCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GeneralComponent;
