import { PolarArea } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { PolarChart } from '../../../Constant/index';
import { polarData, polarOption } from '../../../Data/Charts/ChartJsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const PolarChartClass = () => {
  return (
    <Col xl='6' md='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={PolarChart} />
        <CardBody className='chart-block-container radar-chartjs'>
          <PolarArea data={polarData} options={polarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChartClass;
