import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Default } from '@/Constant';
import { Fragment, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Row, Col, Card, CardBody, Label, Form } from 'reactstrap';

const DraggableRangeClass = () => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 20;
  const [values, setValues] = useState([5, 10]);
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Draggable Range' />
        <CardBody>
          <Form className='theme-form form-label-align-right range-slider'>
            <Row className='mb-0'>
              <Col md='2'>
                <Label>{Default}</Label>
              </Col>
              <Col md='10'>
                <Range
                  values={values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => {
                    setValues(values);
                  }}
                  renderTrack={({ props, children }) => (
                    <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: '36px', display: 'flex', width: '100%' }}>
                      <output style={{ marginTop: '12px' }}>{values[0]}</output>
                      <div ref={props.ref} style={{ height: '5px', width: '100%', borderRadius: '4px', background: getTrackBackground({ values, colors: ['#ccc', '#26695c', '#ccc'], min: MIN, max: MAX }), alignSelf: 'center' }}>
                        {children}
                      </div>
                      <output style={{ marginTop: '12px' }}>{values[1]}</output>
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div {...props} style={{ ...props.style, height: '35px', width: '35px', borderRadius: '30px', backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 2px 6px #AAA' }}>
                      <div style={{ height: '16px', width: '5px', backgroundColor: isDragged ? '#26695c' : '#CCC' }} />
                    </div>
                  )}
                />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DraggableRangeClass;
