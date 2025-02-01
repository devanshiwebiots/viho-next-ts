'use client';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BasicSliderClass from '../../../../Component/bonus-ui/RangeSlider/BasicSlider';
import NegativeValuesClass from '../../../../Component/bonus-ui/RangeSlider/NegativeValues';
import DisabledClass from '../../../../Component/bonus-ui/RangeSlider/Disabled';
import FormatedLabelClass from '../../../../Component/bonus-ui/RangeSlider/FormatedLabel';
import FormatedLabelClass2 from '../../../../Component/bonus-ui/RangeSlider/FormatedLabel2';
import DraggableRangeClass from '../../../../Component/bonus-ui/RangeSlider/DraggableRange';

const RangeSliderContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12'>
          <Row className='mb-0'>
            <BasicSliderClass />
            <NegativeValuesClass />
            <DisabledClass />
            <FormatedLabelClass />
            <FormatedLabelClass2 />
            <DraggableRangeClass />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RangeSliderContainer;
