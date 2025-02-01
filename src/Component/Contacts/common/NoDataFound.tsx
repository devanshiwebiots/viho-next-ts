import { Card, CardBody } from 'reactstrap';
import { NoDataFound } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
interface propsType {
  title: string;
}
const NoDataFoundClass = ({ title }: propsType) => {
  return (
    <Card className='mb-0'>
      <CardHeaderCommon Name='d-flex' title={title} description={'10 Contacts'} />
      <CardBody>
        <p>{NoDataFound} </p>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
