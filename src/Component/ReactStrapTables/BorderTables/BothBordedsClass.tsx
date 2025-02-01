import { Col, Card, Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import { tableTypes, tablesData } from '../TablesType';
import { BothBordeds } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BothBorderTableSubHeading } from '@/Data/CardHeaderCommonData';

const BothBordedsClass = () => {
  const { items } = useSelector((state: tableTypes) => state.TableSlice);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BothBordeds} description={BothBorderTableSubHeading} />
        <div className='table-responsive'>
          <Table bordered>
            <thead>
              <tr>
                <th scope='col'>{'#'}</th>
                <th scope='col'>{'First Name'}</th>
                <th scope='col'>{'Last Name'}</th>
                <th scope='col'>{'Username'}</th>
              </tr>
            </thead>
            <tbody>
              {items.slice(0, 3).map((item: tablesData) => (
                <tr key={item.id}>
                  <th scope='row'>{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.user_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BothBordedsClass;
