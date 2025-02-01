'use client';
import { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import ClientNameClass from '../../../../Component/Project/Newproject/ClientName';
import EnterSomeDetailsClass from '../../../../Component/Project/Newproject/EnterSomeDetails';
import IssueClass from '../../../../Component/Project/Newproject/IssueClass';
import ProjectRateClass from '../../../../Component/Project/Newproject/ProjectRate';
import ProjectTitleClass from '../../../../Component/Project/Newproject/ProjectTitle';
import UploadProjectFileClass from '../../../../Component/Project/Newproject/UploadProjectFile';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import Link from 'next/link';
import { Add, Cancel } from '@/Constant';
import { newProjectTypes } from '@/Type/SideBarType';
import { useDispatch } from 'react-redux';
import { addProjectData } from '@/Redux/Slices/projectSlice';
import { RootState } from '@/Redux/ReduxStore';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Newproject = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newProjectTypes>();

  const AddProject: SubmitHandler<newProjectTypes> = async (data) => {
    console.log('data', data);
    await dispatch(addProjectData(data));
    router.push(`/project/project-list`);
  };

  return (
    <Fragment>
      <Breadcrumbs parent='Project' title='Create Project' mainTitle='Create Project' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form className='theme-form' onSubmit={handleSubmit(AddProject)}>
                  <ProjectTitleClass register={register} errors={errors} />
                  <ClientNameClass register={register} errors={errors} />
                  <ProjectRateClass register={register} errors={errors} />
                  <IssueClass register={register} />
                  <EnterSomeDetailsClass register={register} errors={errors} />
                  <UploadProjectFileClass />
                  <Row>
                    <Col>
                      <FormGroup className='mb-0'>
                        <Button color='success' className='me-3'>
                          {Add}
                        </Button>
                        <Link href={`/app/project/project-list`}>
                          <Button color='danger'>{Cancel}</Button>
                        </Link>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Newproject;
