import { Javascript } from '@/Constant';
import { Tag, Edit2, Link, Share2, Trash2 } from 'react-feather';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FavDesciptionDataPropType } from '@/Type/SideBarType';

const FavDesciptionData = ({ myBookData, Remove_from_my_bookmark }: FavDesciptionDataPropType) => {
  const { title, id, website_url, collection, desc } = myBookData;
  return (
    <div className='desciption-data'>
      <div className='title-bookmark'>
        <h6 className='title_0'>{title}</h6>
        <p className='weburl_0'>{website_url}</p>
        <div className='hover-block'>
          <ListGroup className='simple-list flex-row'>
            <ListGroupItem>
              <a href={Javascript}>
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
              <a href={Javascript} onClick={() => Remove_from_my_bookmark(id)}>
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
          <p className='desc_3'>{desc}</p>
          <span className='collection_3'>{collection}</span>
        </div>
      </div>
    </div>
  );
};

export default FavDesciptionData;
