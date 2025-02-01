import React, { Fragment } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Media, Row } from 'reactstrap';

import { AssetsImagePath, Javascript } from '@/Constant';
import Image from 'next/image';

const MailContain = () => {
  return (
    <Fragment>
      <div className='email-right-aside'>
        <Card className='email-body'>
          <div className='email-profile'>
            <div className='email-right-aside'>
              <div className='email-body'>
                <div className='email-content'>
                  <div className='email-top'>
                    <Row>
                      <Col xl='12'>
                        <Media>
                          <Image className='me-3 rounded-circle' height={48} width={48} src={`${AssetsImagePath}/user/user.png`} alt='' />
                          <Media body>
                            <h6 className='d-block'>John Deo</h6>
                            <p>Mattis luctus.Donec nisi diam text.</p>
                          </Media>
                        </Media>
                      </Col>
                    </Row>
                  </div>
                  <div className='email-wrapper'>
                    <div className='emailread-group'>
                      <div className='read-group'>
                        <p>Hello</p>
                        <p>Dear Sir Good Morning,</p>
                      </div>
                      <div className='read-group'>
                        <h5>Inquiry about our theme pages design.</h5>
                        <p>Viho Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                        <p className='m-t-10'>It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. Viho Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework.</p>
                      </div>
                    </div>
                    <div className='emailread-group'>
                      <h6 className='text-muted mb-0'>
                        <i className='icofont icofont-clip'></i> ATTACHMENTS
                      </h6>
                      <a className='text-muted text-end right-download font-primary f-w-600' href={Javascript}>
                        <i className='fa fa-long-arrow-down me-2'></i>Download All
                      </a>
                      <div className='clearfix'></div>
                      <div className='attachment'>
                        <ListGroup attrUL={{ className: 'd-flex flex-row' }}>
                          <ListGroupItem>
                            <Image height={90} width={90} className='img-fluid' src={`${AssetsImagePath}/email/1.jpg`} alt='' />
                          </ListGroupItem>
                          <ListGroupItem>
                            <Image height={90} width={90} className='img-fluid' src={`${AssetsImagePath}/email/2.jpg`} alt='' />
                          </ListGroupItem>
                          <ListGroupItem>
                            <Image height={90} width={90} className='img-fluid' src={`${AssetsImagePath}/email/3.jpg`} alt='' />
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </div>
                    <div className='emailread-group'>
                      <textarea className='form-control' rows={4} cols={50} placeholder='write about your nots'></textarea>
                      <div className='action-wrapper'>
                        <ListGroup className=' actions d-flex flex-row'>
                          <ListGroup>
                            <a className='btn btn-primary me-2' href={Javascript}>
                              <i className='fa fa-reply me-2  '></i>Reply
                            </a>
                          </ListGroup>
                          <ListGroup>
                            <a className='btn btn-secondary me-2' href={Javascript}>
                              <i className='fa fa-reply-all me-2  '></i>Reply All
                            </a>
                          </ListGroup>
                          <ListGroup>
                            <a className='btn btn-danger' href={Javascript}>
                              <i className='fa fa-share me-2'></i>Forward
                            </a>
                          </ListGroup>
                        </ListGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};
export default MailContain;
