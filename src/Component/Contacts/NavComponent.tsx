import { Nav, NavItem } from 'reactstrap';
import { Javascript, Personal, Views } from '@/Constant';
import CreateContact from './CreateContact';
import { useState } from 'react';
import CategoryCreate from './CategoryCreate';
import { SiderBarData } from '@/Data/contact/SideBar';
import { NavComponentpropsType } from './ContactType';

const NavComponent = ({ callbackActive }: NavComponentpropsType) => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Nav className='main-menu contact-options' role='tablist'>
      <NavItem>
        <CreateContact />
      </NavItem>
      <NavItem>
        <span className='main-title'> {Views}</span>
      </NavItem>
      <NavItem>
        <a
          href={Javascript}
          className={activeTab === '1' ? 'active' : ''}
          onClick={() => {
            setActiveTab('1');
            callbackActive('1');
          }}>
          <span className='title'> {Personal}</span>
        </a>
      </NavItem>
      <NavItem>
        <CategoryCreate />
      </NavItem>
      {SiderBarData.map((data, index) => (
        <NavItem key={index}>
          <a
            href={Javascript}
            className={activeTab === data.value ? 'active' : ''}
            onClick={() => {
              setActiveTab(data.value);
              callbackActive(data.value);
            }}>
            <span className='title'>{data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
