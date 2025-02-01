import React, { Fragment } from 'react';
import DeniReactTreeView from 'deni-react-treeview';
import { Card, CardBody, Col } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const DragTree = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Lazy Loading Tree' />
        <CardBody>
          <div id='dragTree'>
            <DeniReactTreeView url='https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json' lazyLoad={true} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DragTree;
