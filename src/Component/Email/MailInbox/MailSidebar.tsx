'use client';

import React, { Fragment, useState } from 'react';
import { Card, CardBody, ListGroup, ListGroupItem, Media } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import { AssetsImagePath, Javascript, NEWMAIL } from '@/Constant';
import { emailSidebarData } from '@/Data/MainData';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const MailSidebar = () => {

  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <Fragment>
      <div className='email-sidebar md-sidebar'>
        <a className='btn btn-primary md-sidebar-toggle mb-3' href={Javascript} onClick={OnHandelClick}>
          Email Filter
        </a>
        <div className={`email-left-aside md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
          <Card>
            <CardBody>
              <div className='email-app-sidebar'>
                <Media className='align-items-center'>
                  <div className='media-size-email'>
                    <Image height={52} width={52} className='me-3 rounded-circle' src={`${AssetsImagePath}/user/user.png`} alt='' unoptimized/>
                  </div>
                  <Media body>
                    <Link href={`/users/userprofile`}>
                      <h6 className='f-w-600'>MARKJENCO</h6>
                    </Link>
                    <p>Markjecno @gmail.com</p>
                  </Media>
                </Media>
                <ListGroup className=' nav main-menu ' role='tablist'>
                  <ListGroupItem className='nav-item'>
                    <Link className='btn-primary btn-block btn-mail w-100' id='pills-darkhome-tab' href={`/email/compose`}>
                      <i className='icofont icofont-envelope me-2'></i> {NEWMAIL}
                    </Link>
                  </ListGroupItem>
                  {emailSidebarData.map((item, index) => (
                    <ListGroupItem key={index} className='nav-item'>
                      {index == 7 ? (
                        <hr />
                      ) : (
                        <a className='show' id='pills-darkprofile-tab' href={Javascript}>
                          <span className='title'>
                            <i className={item.IconClass}></i> {item.text}
                          </span>
                          {item.Number && <span className='badge pull-right'>{item.Number}</span>}
                        </a>
                      )}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};
export default MailSidebar;
