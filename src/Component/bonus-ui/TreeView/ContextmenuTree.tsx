import React, { useRef } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import DeniReactTreeView from 'deni-react-treeview';
import { Col, Card, CardBody } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const ContextmenuTree = () => {
  const treeviewRef = useRef<any>(null);

  const deleteItemClick = (id: number) => {
    if (treeviewRef.current && treeviewRef.current) treeviewRef.current.api?.removeItem(id);
  };

  const editItemClick = (item: any) => {
    alert('Edit item: ' + JSON.stringify(item, null, 2));
  };

  const onRenderItem = (item: any) => {
    return (
      <div className='treeview-item-example'>
        <span className='treeview-item-example-text'>{item.text}</span>
        <span className='actionButton trash' onClick={() => deleteItemClick(item.id)}>
          <FaTrash size='15' />
        </span>
        <span className='actionButton edit' onClick={() => editItemClick(item)}>
          <FaEdit size='15' />
        </span>
      </div>
    );
  };

  return (
    <Col sm='6'>
      <Card>
        <CardHeaderCommon title='Remove Item Tree' />
        <CardBody>
          <DeniReactTreeView className='onrenderitem-example' ref={treeviewRef} url='https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json' selectRow={true} onRenderItem={onRenderItem} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextmenuTree;
