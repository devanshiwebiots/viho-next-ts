'use client';

import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import { CKEditorExample } from '@/Constant';
import { CKEditorParagraph } from '@/Data/Editor';
import React, { useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const CKEditors = () => {
   const content = `Launched by a Saturn V rocket from Kennedy Space Center in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of NASA's Apollo program. The Apollo spacecraft had three parts: Command Module with a cabin for the three astronauts which was the only part which landed back on Earth Service Module which supported the Command Module with propulsion, electrical power, oxygen and water Lunar for on the Moon. After being sent to the Moon by the Saturn V's upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the Sea of Tranquility. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the Pacific Ocean on July 24. <br/><br/><br/><br/><br/>`;
const LoremText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.`;
const [editing, setEditing] = useState(false);
const showEditor = () => setEditing(!editing);
 
  return (
    <>
      <Breadcrumbs title="CK Editor" parent="Editor" mainTitle="CK Editor" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <h5>{CKEditorExample}</h5>
              </CardHeader>
              <CardBody>
                <CKEditor editor={ClassicEditor} data={content} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <h5>Inline Editor</h5>
              </CardHeader>
              <CardBody>
                {editing ? (
                  <>
                    <CKEditor editor={ClassicEditor} data={LoremText} />
                    <Button color="dark" className="mt-2" onClick={() => setEditing(false)}>{`Hide`}</Button>
                  </>
                ) : (
                  <div onClick={showEditor}>
                    <h1>Your title</h1>
                    <p>{LoremText}</p>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CKEditors;
