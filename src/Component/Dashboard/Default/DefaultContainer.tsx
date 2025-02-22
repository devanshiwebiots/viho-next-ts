import React from 'react'
import { Col, Row } from 'reactstrap'
import ProfileGreeting from './ProfileGreetingCard'
import IncomeCard from './IncomeCard'
import { Icon1, Icon2 } from '@/Component/svgicons'
import IncomeChartClass from './IncomechartCard'
import GrowthOverview from './GrownCard'
import LatestActivityClass from './LatestActivityCard'
import RecentOrderClass from './RecentOrderCard'
import UserCard from './UserCard'
import TransactionCard from './TransactionCard'

const DefaultContainer = () => {
  return (
    <Row>
        <Col xl='5' className='box-col-12 des-xl-100'>
          <Row>
            <Col xl='12' md='6' className='box-col-6 des-xl-50'>
              <ProfileGreeting />
            </Col>
            <Col xl='6' md='3' sm='6' className='box-col-3 des-xl-25 rate-sec'>
              <IncomeCard iconClass={<Icon1 />} amount='8,50,49' title='Our Annual Income' percent='95.54%' />
            </Col>
            <Col xl='6' md='3' sm='6' className='box-col-3 des-xl-25 rate-sec'>
              <IncomeCard iconClass={<Icon2 />} amount='2,03,59' title='Our Annual Losses' percent='90.54%' />
            </Col>
          </Row>
        </Col>
        <IncomeChartClass />
        <Col xl='8' className='box-col-12 des-xl-100'>
          <Row>
            <Col xl='6' className='box-col-6 des-xl-50'>
              <GrowthOverview />
            </Col>
            <Col xl='6' className=' box-col-6 des-xl-50'>
              <LatestActivityClass />
            </Col>
            <Col xl='12' className='recent-order-sec'>
              <RecentOrderClass />
            </Col>
          </Row>
        </Col>
        <Col xl='4' className='box-col-12 des-xl-100'>
          <Row>
            <Col xl='12' className='box-col-6 des-xl-50'>
              <UserCard />
            </Col>
            <Col xl='12' className='box-col-6 des-xl-50'>
              <TransactionCard />
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

export default DefaultContainer