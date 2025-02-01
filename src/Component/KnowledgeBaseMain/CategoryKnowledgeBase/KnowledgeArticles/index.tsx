import { Javascript, AssetsImagePath } from '@/Constant';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Archive, ArrowRight, FileText } from 'react-feather';
import { Badge, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';
import { fetchContent } from '@/Redux/Slices/KnowledgeBaseSlice';
import { knowledgeDataPropsType } from '@/Type/SideBarType';

const KnowledgeArticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, []);
  const fetchedKnowledgeData = useSelector((store: RootState) => store.KnowledgeBaseSlice.data);
  return (
    <Col sm='12'>
      <div className='header-faq'>
        <h5>knowledge articles by category</h5>
      </div>
      <Row className='browse'>
        {fetchedKnowledgeData.length > 0 ? (
          fetchedKnowledgeData.map((data: knowledgeDataPropsType) => (
            <Col xl='4' md='6' key={data.id} className='xl-50'>
              <div className='browse-articles'>
                <h6>
                  <span>
                    <Archive />
                  </span>{' '}
                  {data.title}
                </h6>
                <ListGroup tag={'ul'}>
                  <ListGroupItem tag={'li'}>
                    <a href={Javascript}>
                      <span>
                        {' '}
                        <FileText />
                      </span>
                      <h5>{data.text1}</h5>
                      <Badge color='primary' className='pull-right'>
                        {data.text1_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Javascript}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text2}</h5>
                      <Badge color='primary' className='pull-right'>
                        {data.text2_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Javascript}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text3}</h5>
                      <Badge color='primary' className='pull-right'>
                        {data.text3_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Javascript}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text4}</h5>
                      <Badge color='primary' className='pull-right'>
                        {data.text4_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Javascript} className='f-w-600 font-primary'>
                      <span>
                        <ArrowRight />
                      </span>
                      <span>{data.text5}</span>
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          ))
        ) : (
          <Image height={400} width={400} className='img-fluid second-search' src={`${AssetsImagePath}/search-not-found.png`} alt='' />
        )}
      </Row>
    </Col>
  );
};

export default KnowledgeArticles;
