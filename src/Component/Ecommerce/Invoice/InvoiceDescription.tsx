import { Col, Media, Row } from 'reactstrap';
import React from 'react';
import Image from 'next/image';
import { AssetsImagePath, JohanDeo, JohanDeoMailId, ProjectDescriptionConst } from '@/Constant';

const InvoiceDescription = () => {
  const ProjectDescriptionDetails = "You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To What's Fashionable.";
  return (
    <Row className='invo-profile'>
      <Col xl='4'>
        <div className='invo-profile-left'>
          <Media>
            <div className='media-left'>
              <Image width={60} height={60} className='media-object rounded-circle img-60' src={`${AssetsImagePath}/user/1.jpg`} alt='' />
            </div>
            <Media body className='m-l-20'>
              <h4 className='media-heading f-w-600'>{JohanDeo}</h4>
              <p>
                {JohanDeoMailId}
                <br />
                <span className='digits'>555-555-5555</span>
              </p>
            </Media>
          </Media>
        </div>
      </Col>
      <Col xl='8'>
        <div className='invo-profile-right'>
          <div id='project'>
            <h6>{ProjectDescriptionConst}</h6>
            <p>{ProjectDescriptionDetails}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default InvoiceDescription;
