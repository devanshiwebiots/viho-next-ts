import { Javascript } from '@/Constant';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CallIcons = () => {
  const callIconsData = ['video-camera', 'volume', 'user'];
  return (
    <div className='call-icons'>
      <ListGroup className='list-inline flex-row d-inline-flex'>
        {callIconsData.map((data, index) => (
          <ListGroupItem className='list-inline-item' key={index}>
            <a href={Javascript}>
              <i className={`icon-${data}`} />
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CallIcons;
