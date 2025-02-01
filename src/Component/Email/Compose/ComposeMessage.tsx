import React, { Fragment } from 'react';
import { Button, Card, Form, Input, Label, ListGroup, ListGroupItem } from 'reactstrap';
import CKEditor from 'react-ckeditor-component';
import Dropzone from 'react-dropzone-uploader';
import { Cancel, Javascript, Send } from '@/Constant';

const ComposeMessage = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' };
  };
  return (
    <Fragment>
      <div className='email-right-aside'>
        <Card className='email-body'>
          <div className='email-profile'>
            <div className='email-body'>
              <div className='email-compose'>
                <div className='email-top compose-border'>
                  <div className='compose-header'>
                    <h4 className='mb-0'>New Message</h4>
                    <Button color='primary'>
                      <i className='fa fa-file me-2'></i> save
                    </Button>
                  </div>
                </div>
                <div className='email-wrapper'>
                  <Form className='theme-form'>
                    <div className='form-group'>
                      <Label className='col-form-label pt-0'>To</Label>
                      <Input id='exampleInputEmail1' type='email' />
                    </div>
                    <div className='form-group'>
                      <Label className='col-form-label pt-0'>Subject</Label>
                      <Input id='exampleInputPassword1' type='text' />
                    </div>
                    <div className='form-group'>
                      <Label className='col-form-label pt-0'>Messages</Label>
                      <CKEditor />
                    </div>
                    <div className='form-group'>
                      <Dropzone getUploadParams={getUploadParams} maxFiles={1} multiple={false} canCancel={false} inputContent='Drop files here or click to upload.' />
                    </div>
                  </Form>
                  <div className='action-wrapper'>
                    <ListGroup className='actions d-flex flex-row'>
                      <ListGroupItem>
                        <a className='btn btn-secondary' href={Javascript}>
                          <i className='fa fa-paper-plane me-2'></i>
                          {Send}
                        </a>
                      </ListGroupItem>
                      <ListGroupItem>
                        <a className='btn btn-danger' href={Javascript}>
                          <i className='fa fa-times me-2'></i>
                          {Cancel}
                        </a>
                      </ListGroupItem>
                    </ListGroup>
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
export default ComposeMessage;
