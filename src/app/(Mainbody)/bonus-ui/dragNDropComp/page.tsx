'use client';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { Container } from 'reactstrap';

const ContentData = dynamic(() => import("@/Component/bonus-ui/DragAndDrop"), { ssr: false });

const DragAndDrop = () => {  
  return (
    <Fragment>
      <Breadcrumbs parent='Bouns Ui' title='Drag & Drop' mainTitle='Drag & Drop' />
      <Container fluid={true}>
          <ContentData/>
      </Container>
    </Fragment>
  );
};

export default DragAndDrop;
