import React from 'react';
import { Card, CardBody, CardHeader, Col, Progress, Table } from 'reactstrap';
import { AssetsImagePath, Designation, EmployeeStatus, Experience, Name, SkillLevel } from '@/Constant';
import { EmployeeStatusData } from '@/Data/Widgets';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/ReduxStore';

const EmployeeStatusCard = () => {
  return (
    <Col xl='6' className='xl-100 box-col-12'>
      <Card className='employee-status'>
        <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
          <h5>{EmployeeStatus}</h5>
        </CardHeader>
        <CardBody>
          <div className='user-status table-responsive'>
            <Table className='table-bordernone'>
              <thead>
                <tr>
                  <th scope='col'>{Name}</th>
                  <th scope='col'>{Designation}</th>
                  <th scope='col'>{SkillLevel}</th>
                  <th scope='col'>{Experience}</th>
                </tr>
              </thead>
              <tbody>
                {EmployeeStatusData.map((item) => (
                  <tr key={item.id}>
                    <td className='bd-t-none u-s-tb'>
                      <div className='align-middle image-sm-size'>
                        <Image className='img-radius align-top m-r-15 rounded-circle d-inline' width={41} height={41} src={`${AssetsImagePath}${item.img}`} alt='' unoptimized/>
                        <div className='d-inline-block'>
                          <h6>
                            <Link href={`/users/userProfile`}>{item.name}</Link>
                            <span className='text-muted'>{item.status}</span>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>{item.skill}</td>
                    <td>
                      <div className='progress-showcase'>
                          {item.processbar}
                      </div>
                    </td>
                    <td>{item.exp}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeStatusCard;
