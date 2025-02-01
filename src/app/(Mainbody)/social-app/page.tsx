'use client';
import { SocialTabsData } from '@/Data/SocialApp';
import React, { useState } from 'react';
import { Card, Col, Input, InputGroup, Nav, NavItem, NavLink, Container, Row } from 'reactstrap';
import TopSocialApp from '../../../Component/SocialApp/TopSocialApp';
import TabContents from '../../../Component/SocialApp/TabContents';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';

const SocialApp = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
      <Breadcrumbs parent='Social App' title='Social App' mainTitle='Social App' />
      <Container fluid>
        <div className='user-profile'>
          <Row>
            <TopSocialApp />
            <Col sm='12 ' className='box-col-12'>
              <Card>
                <div className='social-tab'>
                  <Nav tabs>
                    {SocialTabsData.map((item, i) => (
                      <NavItem key={i}>
                        <NavLink
                          style={{ cursor: 'pointer' }}
                          className={activeTab === item.id ? 'active' : ''}
                          onClick={() => {
                            setActiveTab(item.id);
                          }}>
                          {item.logo}
                          {item.title}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                  <InputGroup>
                    <Input type='text' placeholder='Search.......' />
                    <span className='input-group-text'>
                      <i className='fa fa-search'></i>
                    </span>
                  </InputGroup>
                </div>
              </Card>
            </Col>
          </Row>
          <TabContents activeTab={activeTab} />
        </div>
      </Container>
    </>
  );
};

export default SocialApp;
