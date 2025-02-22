import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const InlineTextCard = () => {
  return (
    <Col sm='12' xl='6'>
      <Card>
        <CardHeader className='pb-0'>
          <h5>{'Inline text elements'}</h5>
          <span>{'Styling for common inline HTML5 elements.'}</span>
        </CardHeader>
        <CardHeaderCommon title='Inline text elements' description={'Styling for common inline HTML5 elements.'} />
        <CardBody>
          <p>
            {'You can use the mark tag to'}
            <mark>{'highlight'}</mark> {'text.'}
          </p>
          <p>
            <del>{'This line of text is meant to be treated as deleted text.'}</del>
          </p>
          <p>
            <s>{'This line of text is meant to be treated as no longer accurate.'}</s>
          </p>
          <p>
            <ins>{'This line of text is meant to be treated as an addition to the document.'}</ins>
          </p>
          <p>
            <u>{'This line of text will render as underlined'}</u>
          </p>
          <p>
            <small>{'This line of text is meant to be treated as fine print.'}</small>
          </p>
          <p>
            <strong>{'This line rendered as bold text.'}</strong>
          </p>
          <p>
            <em>{'This line rendered as italicized text.'}</em>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineTextCard;
