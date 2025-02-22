import { FeaturedTutorials, Javascript, AssetsImagePath } from '@/Constant';
import { FaqStars } from '@/Data/FAQ/Faq';
import { ArticlesParagraph, CoursesData } from '@/Data/KnowledgeBase';
import Image from 'next/image';
import React from 'react';
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap';

const Courses = () => {
  return (
    <Col lg='12' className='featured-tutorial'>
      <div className='header-faq'>
        <h5>{FeaturedTutorials}</h5>
      </div>
      <Row>
        {CoursesData.map((item, i) => (
          <Col key={i} xl='3' sm='6' className=' box-col-6'>
            <Card className=' features-faq product-box'>
              <div className='faq-image product-img'>
                <Image height={100} width={300} className='img-fluid ' src={`${AssetsImagePath}/faq/${item.image}`} alt='' />
                <div className='product-hover'>
                  <ul>
                    <li>
                      <i className='icon-link' />
                    </li>
                    <li>
                      <i className='icon-import' />
                    </li>
                  </ul>
                </div>
              </div>
              <CardBody>
                <a href={Javascript}>
                  <h6>{item.heading}</h6>
                </a>
                <p>{ArticlesParagraph}</p>
              </CardBody>
              <CardFooter>
                <span>{item.date}</span> &nbsp;
                {FaqStars}
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Courses;
