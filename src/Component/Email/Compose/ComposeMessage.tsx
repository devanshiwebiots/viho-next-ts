import React, { Fragment } from 'react';
import { Button, Card, Form, Input, Label, ListGroup, ListGroupItem } from 'reactstrap';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Cancel, Javascript, Send } from '@/Constant';
import CommonFileUpload from '@/Component/bonus-ui/Dropzone/Common/CommonFileUpload';

const ComposeMessage = () => {
  return (
    <Fragment>
      <div className="email-right-aside">
        <Card className="email-body">
          <div className="email-profile">
            <div className="email-body">
              <div className="email-compose">
                <div className="email-top compose-border">
                  <div className="compose-header">
                    <h4 className="mb-0">New Message</h4>
                    <Button color="primary">
                      <i className="fa fa-file me-2"></i> save
                    </Button>
                  </div>
                </div>
                <div className="email-wrapper">
                  <Form className="theme-form">
                    <div className="form-group">
                      <Label className="col-form-label pt-0">To</Label>
                      <Input id="exampleInputEmail1" type="email" />
                    </div>
                    <div className="form-group">
                      <Label className="col-form-label pt-0">Subject</Label>
                      <Input id="exampleInputPassword1" type="text" />
                    </div>
                    <div className="form-group">
                      <Label className="col-form-label pt-0">Messages</Label>
                      <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className="form-group">
                      <CommonFileUpload />
                    </div>
                  </Form>
                  <div className="action-wrapper">
                    <ListGroup className="actions d-flex flex-row">
                      <ListGroupItem>
                        <a className="btn btn-secondary" href={Javascript}>
                          <i className="fa fa-paper-plane me-2"></i>
                          {Send}
                        </a>
                      </ListGroupItem>
                      <ListGroupItem>
                        <a className="btn btn-danger" href={Javascript}>
                          <i className="fa fa-times me-2"></i>
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
