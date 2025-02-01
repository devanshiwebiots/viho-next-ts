'use client';

import React from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicExamples } from '@/Constant';

const Basic = () => {
  const basicToaster = (toastName: string) => {
    switch (toastName) {
      case 'basicSuccessToast':
        toast.success('Success Notification !', {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 'basicInfoToast':
        toast.info('Info Notification !', {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 'basicWarningToast':
        toast.warn('Warning Notification !', {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case 'basicDangerToast':
        toast.error('Danger Notification !', {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BasicExamples} />
        <CardBody>
          <div className='btn-showcase'>
            <Button name='basicSuccessToast' color='success' onClick={() => basicToaster('basicSuccessToast')}>
              Success Notification
            </Button>
            <Button name='basicInfoToast' color='info' onClick={() => basicToaster('basicInfoToast')}>
              Info Notification
            </Button>
            <Button name='basicWarningToast' color='warning' onClick={() => basicToaster('Warning Notification')}>
              Warning Notification
            </Button>
            <Button name='basicDangerToast' color='danger' onClick={() => basicToaster('basicDangerToast')}>
              Danger Notification
            </Button>
          </div>
        </CardBody>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default Basic;
