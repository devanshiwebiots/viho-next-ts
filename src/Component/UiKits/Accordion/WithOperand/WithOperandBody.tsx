import { AccordionWithOperand } from '@/Constant';
import { WithOperandBodyType } from '@/Type/SideBarType';
import React from 'react';
import { Button, CardBody, CardHeader, Collapse } from 'reactstrap';

const WithOperandBody = ({ isOpen, element, toggle }: WithOperandBodyType) => {
  return (
    <>
      <CardHeader>
        <h5 className='mb-0'>
          <Button className='btn-link' color='default' onClick={() => toggle(element.id)}>
            {AccordionWithOperand}
            <span className='digits'> #{element.id}</span>
          </Button>
        </h5>
      </CardHeader>
      <Collapse isOpen={isOpen === element.id}>
        <CardBody>{'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'}</CardBody>
      </Collapse>
    </>
  );
};

export default WithOperandBody;
