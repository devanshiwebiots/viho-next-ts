'use client';

import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import UserCardsFooter from '../../../../Component/users/UserCards/UserCardsFooter';
import Image from 'next/image';
import { userCardData } from '@/app/ApiData/userCardData';
import Link from 'next/link';
import { TourUseProfileIcon } from '@/Data/BonusUiData/Tour';
import { AssetsImagePath, Javascript } from '@/Constant';
import { CardTypes } from '@/Type/SideBarType';

const UserCardsContainer = () => {
  return (
    <Container fluid>
      <Row className='user-cards-items'>
        {userCardData.map((item: CardTypes) => (
          <Col md='6' xl='4' lg='6' className='box-col-6' key={item.id}>
            <Card className='custom-card'>
              <CardHeader className='p-0'>
                <Image height={215} width={345} src={`${AssetsImagePath}/${item.card_bg}`} className='img-fluid' alt='user' unoptimized/>
              </CardHeader>
              <div className='card-profile'>
                <Image height={110} width={110} src={`${AssetsImagePath}/${item.avatar}`} className='rounded-circle mx-auto' alt='users' unoptimized/>
              </div>
              <div className='social-media step3'>
                <ul className='user-list-social flex-row simple-list card-social'>
                  {TourUseProfileIcon.map((item, i) => (
                    <li key={i}>
                      <a href={Javascript}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/user/userprofile`}>
                <div className='text-center profile-details'>
                  {' '}
                  <h4>{item.name}</h4> <h6>{item.post}</h6>
                </div>
              </Link>
              <UserCardsFooter item={item} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCardsContainer;
