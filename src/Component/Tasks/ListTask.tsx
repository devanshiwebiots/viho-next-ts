import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Printer } from 'react-feather';
import { Card, CardHeader } from 'reactstrap';
import { CreatedByMe, Javascript, Print } from '@/Constant';
import CreatedByme from './CreatedByme';

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h6 className='mb-0'>{CreatedByMe}</h6>
        <ReactToPrint
          trigger={() => (
            <a href={Javascript}>
              <Printer className='me-2' />
              {Print}
            </a>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByme />
    </Card>
  );
};

export default ListOfTask;
