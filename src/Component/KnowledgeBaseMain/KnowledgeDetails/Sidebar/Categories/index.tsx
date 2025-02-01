import React, { useState } from 'react';
import { Button, Card, CardHeader, Col, Collapse, Row } from 'reactstrap';
import { Javascript, KnowledgeCategories, Knowledgefilter } from '@/Constant';
import UpcomingCourse from '../UpcomingCourses';

const DetailedSidebar = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Col xl='3' className='xl-40 box-col-4'>
      <div className='job-sidebar md-sidebar'>
        <Button color='primary' className=' md-sidebar-toggle' href={Javascript} onClick={() => setIsOpen(!IsOpen)}>
          {Knowledgefilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar ${IsOpen ? 'open' : ''}`}>
          <div className='default-according style-1 job-accordion' id='accordionoc'>
            <Row>
              <Col xl='12'>
                <Card>
                  <CardHeader>
                    <h5 className='mb-0 p-0'>
                      <Button color='link ps-0 ' tag={'a'} className='ps-4' onClick={() => setIsProfile(!isProfile)}>
                        {KnowledgeCategories}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isProfile}>
                    <div className="categories">
                      <div className="learning-header"><span className="f-w-600">Design</span></div>
                      <ul>
                        <li><a href="#javascript">UI Design </a><span className="badge badge-primary pull-right">28</span></li>
                        <li><a href="#javascript">UX Design </a><span className="badge badge-primary pull-right">35</span></li>
                        <li><a href="#javascript">Interface Design </a><span className="badge badge-primary pull-right">17</span></li>
                        <li><a href="#javascript">User Experience </a><span className="badge badge-primary pull-right">26</span></li>
                      </ul>
                    </div>
                    <div className="categories pt-0">
                      <div className="learning-header"><span className="f-w-600">Development</span></div>
                      <ul>
                        <li><a href="#javascript">Frontend Development</a><span className="badge badge-primary pull-right">48</span></li>
                        <li><a href="#javascript">Backend Development</a><span className="badge badge-primary pull-right">19</span></li>
                      </ul>
                    </div>
                  </Collapse>
                </Card>
              </Col>
              <UpcomingCourse />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default DetailedSidebar;
