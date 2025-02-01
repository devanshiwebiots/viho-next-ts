import { Fragment } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomDirections } from '@/Constant';

const CustomDirectionsClass = () => {
  const directionToaster = (toastName: string) => {
    switch (toastName) {
      case 'directionsSuccessToast':
        toast.success('Success Notification !', {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case 'directionsInfoToast':
        toast.info('Info Notification !', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        break;
      case 'directionsWarningToast':
        toast.warn('Warning Notification !', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        break;
      case 'directionsDangerToast':
        toast.error('Danger Notification !', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        break;
      default:
        directionToaster;
    }
  };

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={CustomDirections} />
        <CardBody>
          <div className='btn-showcase'>
            <Button color='success' name='directionsSuccessToast'  onClick={() => directionToaster('directionsSuccessToast')}>
              Top Center
            </Button>
            <Button color='info' name='directionsInfoToast' onClick={() => directionToaster('directionsInfoToast')}>
              Bottom Center
            </Button>
            <Button color='warning' name='directionsWarningToast' onClick={() => directionToaster('directionsWarningToast')}>
              Bottom Left
            </Button>
            <Button color='danger' name='directionsDangerToast' onClick={() => directionToaster('directionsDangerToast')}>
              Right Bottom
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomDirectionsClass;
