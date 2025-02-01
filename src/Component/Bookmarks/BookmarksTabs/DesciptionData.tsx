import { Javascript } from '@/Constant';
import { Tag, Edit2, Link, Share2, Trash2 } from 'react-feather';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { DescriptionDataPropType } from '@/Type/SideBarType';

const DesciptionData = ({ data, OnHandleClick, Removefrombookmark }: DescriptionDataPropType) => {
  const { title, website_url, fillstar, id } = data;
  return (
    <div className='desciption-data'>
      <div className='title-bookmark'>
        <h6 className='title_0'>{title} </h6>
        <p className='weburl_0'>{website_url}</p>
        <div className='hover-block'>
          <ListGroup className='flex-row'>
            <ListGroupItem>
              <a href={Javascript} onClick={() => OnHandleClick(data)}>
                <Edit2 />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href={Javascript}>
                <Link />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href={Javascript}>
                <Share2 />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href={Javascript} onClick={() => Removefrombookmark(id, fillstar)}>
                <Trash2 />
              </a>
            </ListGroupItem>
            <ListGroupItem className='pull-right text-end'>
              <a href={Javascript}>
                <Tag />
              </a>
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className='content-general'>
          <p className='desc_3'>{data.desc}</p>
          <span className='collection_3'>{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DesciptionData;
