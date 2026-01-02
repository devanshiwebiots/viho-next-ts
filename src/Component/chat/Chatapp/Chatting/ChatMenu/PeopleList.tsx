import Image from 'next/image';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { CallData } from '@/Data/ChatData';
import { AssetsImagePath } from '@/Constant';

const PeopleList = () => {
  return (
    <div className='people-list'>
      <ListGroup className='list digits  custom-scrollbar'>
        {CallData.map((data, index) => (
          <ListGroupItem className='clearfix' key={index}>
            <Image className='rounded-circle user-image' height={52} width={52} src={`${AssetsImagePath}/user/${data.imageNumber}.jpg`} alt='call-user' unoptimized/>
            <div className='about'>
              <div className='name'>{data.name}</div>
              <div className='status'>
                {data.icon}
                {data.date}
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default PeopleList;
