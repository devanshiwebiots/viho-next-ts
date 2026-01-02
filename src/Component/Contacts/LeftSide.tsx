import { Card, CardBody, Col } from 'reactstrap';
import { MARKJENCOEMAIL, MarkJecno } from '@/Constant';
import NavComponent from './NavComponent';
import { Fragment, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import TabComponent from './TabComponent';
import Image from 'next/image';
import { RootState } from '@/Redux/ReduxStore';
import user from '../../../public/assets/images/user/user.png';

const LeftSide = () => {
  const { users } = useSelector((state: RootState) => state.ContactReducer);
  const [activeTab, setActiveTab] = useState('1');
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <Fragment>
      <Col xl='3' className='box-col-3'>
        <div className='email-left-aside'>
          <Card>
            <CardBody>
              <div className='email-app-sidebar left-bookmark'>
                <div className='d-flex'>
                  <div className='media-size-email'>
                    <Image height={50} width={50} className='me-3 rounded-circle' src={user} alt='images' unoptimized/>
                  </div>
                  <div className='flex-grow-1'>
                    <h6 className='f-w-600'>{MarkJecno}</h6>
                    <p>{MARKJENCOEMAIL}</p>
                  </div>
                </div>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col xl='9' md='12' className='xl-70 box-col-9'>
        <div className='email-right-aside bookmark-tabcontent contacts-tabs'>
          <div className='email-body radius-left'>
            <div className='ps-0'>
              <TabComponent activeTab={activeTab} users={users} />
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftSide;
