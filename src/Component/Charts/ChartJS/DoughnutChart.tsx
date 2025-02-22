import { Doughnut } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { DoughnutChart } from '../../../Constant/index';
import { doughnutData, doughnutOption } from '../../../Data/Charts/ChartJsData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const DoughnutChartClass = () => {
  return (
    <Col xl='6' md='12' className='box-col-12'>
      <Card>
        <CardHeaderCommon title={DoughnutChart} />
        <CardBody className='chart-block chart-vertical-center'>
          <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartClass;
