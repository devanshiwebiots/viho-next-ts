'use client';

import { Container, Row } from 'reactstrap';
import EditMyProfile from '../../../../Component/users/EditProfile/EditMyProfile';
import EditprofileForm from '../../../../Component/users/EditProfile/EditprofileForm';
import AddProjectsAndUpload from '../../../../Component/users/EditProfile/AddProjectsAndUpload';

const EditProfileContainer = () => {
  return (
    <Container fluid>
      <div className='edit-profile'>
        <Row>
          <EditMyProfile />
          <EditprofileForm />
        </Row>
      </div>
    </Container>
  );
};

export default EditProfileContainer;
