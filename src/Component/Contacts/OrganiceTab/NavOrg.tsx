import { useState } from 'react';
import { Col, Media, Nav, NavItem, NavLink } from 'reactstrap';
import { AssetsImagePath, Javascript } from '@/Constant';
import { orgList } from '@/Data/contact/OrgList';
import Image from 'next/image';
import { NavOrgpropType } from '../ContactType';

const NavOrg = ({ callback }: NavOrgpropType) => {
  const [orgactiveTab, setorgActiveTab] = useState('1');
  return (
    <Col xl='4' md='5' className='xl-50'>
      <Nav className='flex-column nav-pills' id='v-pills-tab1' role='tablist' aria-orientation='vertical'>
        {orgList.map((item) => (
          <NavItem id='myTab' role='tablist' key={item.id}>
            <NavLink
              href={Javascript}
              className={orgactiveTab === item.activeTab ? 'active' : ''}
              onClick={() => {
                setorgActiveTab(item.activeTab);
                callback(item.activeTab);
              }}>
              <Media>
                <Image width={50} height={50} className='p-0 img-50 img-fluid m-r-20 rounded-circle' src={`${AssetsImagePath}/${item.img}`} alt='Image' unoptimized/>
                <Media body>
                  <h6>{item.name}</h6>
                  <p>{item.email}</p>
                </Media>
              </Media>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default NavOrg;
