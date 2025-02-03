import { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { Printer } from 'react-feather';
import { Card, CardHeader } from 'reactstrap';
import { CreatedByMe, Javascript, Print } from '@/Constant';
import CreatedByme from './CreatedByme';

const ListOfTask = () => {
     const contentRef = useRef<HTMLDivElement | null>(null);

     const handlePrint = useReactToPrint({
       contentRef,
     });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h6 className="mb-0">{CreatedByMe}</h6>
        <a href={Javascript} onClick={() => handlePrint()}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <div ref={contentRef}>
        <CreatedByme />
      </div>
    </Card>
  );
};

export default ListOfTask;
