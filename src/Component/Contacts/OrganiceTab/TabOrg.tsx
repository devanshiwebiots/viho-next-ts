import { Fragment } from 'react';
import { ListGroup, ListGroupItem, TabPane } from 'reactstrap';
import { AssetsImagePath, EmailAddress, Gender, General, Javascript, Personal, Print } from '@/Constant';
import { orgList } from '@/Data/contact/OrgList';
import Image from 'next/image';

const TabOrg = () => {
  return (
    <Fragment>
      {orgList.map((item, i) => (
        <TabPane tabId={item.activeTab} key={i}>
          <div className='profile-mail'>
            <div className='d-flex'>
              <Image height={100} width={100} className='p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5' src={`${AssetsImagePath}/${item.img}`} alt='images' unoptimized/>
              <div className='mt-0 flex-grow-1'>
                <h5>
                  <span className='first_name_5'>{item.name}</span>
                </h5>
                <p className='email_add_5'>{item.email}</p>
                <ListGroup className='simple-list'>
                  <ListGroupItem>
                    <a href={Javascript}>{Print}</a>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </div>
            <div className='email-general'>
              <h6>{General}</h6>
              <p>
                {EmailAddress}: <span className='font-primary email_add_5'>{item.email}</span>
              </p>
              <div className='gender'>
                <h6>{Personal}</h6>
                <p>
                  {Gender}: <span>{item.gender}</span>
                </p>
              </div>
            </div>
          </div>
        </TabPane>
      ))}
    </Fragment>
  );
};

export default TabOrg;
