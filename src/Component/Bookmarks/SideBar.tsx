import { Col } from 'react-bootstrap';
import { Card, CardBody } from 'reactstrap';
import NavTab from './NavTab';
import { MARKJENCOEMAIL, MarkJecno } from '@/Constant';
import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';

const SideBar = () => {
  return (
    <Col xl='3' className='box-col-4'>
      <div className='email-left-aside'>
        <Card>
          <CardBody>
            <div className='email-app-sidebar left-bookmark'>
              <div className='d-flex'>
                <div className='media-size-email'>
                  <Image width={52} height={52} className='me-3 rounded-circle' src={`${AssetsImagePath}/user/user.png`} alt='user' unoptimized/>
                </div>
                <div className='flex-grow-1'>
                  <h6 className='f-w-600'>{MarkJecno}</h6>
                  <p>{MARKJENCOEMAIL}</p>
                </div>
              </div>
              <NavTab />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default SideBar;
