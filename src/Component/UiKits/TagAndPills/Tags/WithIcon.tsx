import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { Javascript, TagsWithIcon } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { TagWithIconData } from '@/Data/UiKitsData/TagAndPills/TagWithIconData';

const TagWithIcon = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeaderCommon title={TagsWithIcon} />
        <CardBody>
          {TagWithIconData.map((element, index) => (
            <Badge key={index} color={element.color} href={Javascript}>
              {element.icon}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;
