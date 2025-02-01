import { useState } from 'react';
import { Col, Media, Nav, NavLink } from 'reactstrap';
import SearchNotFoundClass from './SearchNotFoundClass';
import { propsType, userCallbackUser } from './ContactType';
import Image from 'next/image';
import CreateContact from './CreateContact';
import { AssetsImagePath } from '@/Constant';

const ListNewContact = ({ users, userCallback }: propsType) => {
  const [dynamictab, setDynamicTab] = useState(0);

  const ContactDetails = (user: userCallbackUser) => {
    userCallback({ id: user.id, name: user.name, surname: user.surname, avatar: user.avatar, age: user.age, mobile: user.mobile });
  };

  return (
    <Col xl='4' md='5' className='xl-50'>
      <Nav className='flex-column nav-pills'>
        {users.length ? (
          users.map((user: any, index: number) => {
            return (
              <NavLink className={dynamictab === index ? 'active' : ''} onClick={() => setDynamicTab(index)} key={index}>
                <Media onClick={() => ContactDetails(user)}>
                  <Image height={50} width={50} className='p-0 img-fluid img-50 m-r-20 rounded-circle update_img_0' src={`${user.avatar}`} alt='userImage' />
                  <Media body>
                    <h6>
                      <span className='first_name_0'>{user.name}</span>
                      <span className='last_name_0'>{user.surname}</span>
                    </h6>
                    <p className='email_add_0'>
                      {user.name}
                      {'@gmail.com'}
                    </p>
                  </Media>
                </Media>
              </NavLink>
            );
          })
        ) : (
          <Col sm='12'>
          <div>
            <div className='search-not-found text-center'>
              <Image width={200} height={137} src={`${AssetsImagePath}/search-not-found.png`} alt='image' className='second-search' style={{ display: 'inline' }} />
              <p className='mb-0'>Sorry, Not Found Any Contact</p>
            </div>
          </div>
        </Col>
        )}
      </Nav>
    </Col>
  );
};

export default ListNewContact;
