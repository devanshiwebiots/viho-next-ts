import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import DeniReactTreeView from 'deni-react-treeview';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const themes = ['classic'];

const BasicTree = () => {
  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Basic Tree' />
        <CardBody>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {themes.map((theme, index) => {
              return <DeniReactTreeView style={{ marginRight: '10px', marginBottom: '10px' }} key={index} showCheckbox={false} theme={theme} url='https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries-by-continents.json' />;
            })}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTree;
