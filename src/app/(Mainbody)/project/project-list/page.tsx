'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import CusClass from '../../../../Component/Project/Common/CusClass';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Link from 'next/link';
import { All, CreateNewProject, Doing, Done } from '@/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectData } from '@/Redux/Slices/projectSlice';
import { RootState } from '@/Redux/ReduxStore';
import { projectFetchedDataType } from '@/Type/SideBarType';

const Project = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('1');
  const projectFetchedData = useSelector((store: RootState) => store.projectSlice.data);
  useEffect(() => {
    if (!projectFetchedData.length) {
      dispatch(fetchProjectData());
    }
  }, []);

  return (
    <Fragment>
      <Breadcrumbs parent='Project' title='Project List' mainTitle='Project List' />
      <Container fluid={true}>
        <Row>
          <Col md='12' className='project-list'>
            <Card>
              <Row>
                <Col sm='6'>
                  <Nav tabs className='border-tab'>
                    <NavItem>
                      <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <Target />
                        {All}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <Info />
                        {Doing}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <CheckCircle />
                        {Done}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm='6'>
                  <div className='text-end'>
                    <Link className='btn btn-primary' style={{ color: 'white' }} href={`/project/new-project`}>
                      {' '}
                      <PlusCircle />
                      {CreateNewProject}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm='12'>
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <Row>
                      {projectFetchedData.map((item: any, i: any) => (
                        <CusClass item={item} key={i} />
                      ))}
                    </Row>
                  </TabPane>
                  <TabPane tabId='2'>
                    <Row>{projectFetchedData.map((item: projectFetchedDataType, i) => (item.badge === 'Doing' ? <CusClass item={item} key={i} /> : ''))}</Row>
                  </TabPane>
                  <TabPane tabId='3'>
                    <Row>{projectFetchedData.map((item: projectFetchedDataType, i) => (item.badge === 'Done' ? <CusClass item={item} key={i} /> : ''))}</Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Project;
