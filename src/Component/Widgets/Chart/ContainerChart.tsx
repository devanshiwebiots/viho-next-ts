import React, { Fragment } from 'react'
import ChartWidgets from './ChartWidget'
import BarChartsWidgets from './BarChartWidgets'
import { Row } from 'reactstrap'
import LiveChart from './LiveChart'
import MonthlySaleChart from './MonthlySaleChart'
import UsesChart from './UsesChart'
import BrowserChartWidgets from './BrowserChartWidgets'
import TurnoverChartComponent from './TurnoverChart'

const ContainerChart = () => {
  return (
    <Fragment>
        <ChartWidgets />
        <BarChartsWidgets />
        <Row>
          <LiveChart />
          <TurnoverChartComponent />
          <MonthlySaleChart />
          <UsesChart />
        </Row>
        <BrowserChartWidgets />
    </Fragment>
  )
}

export default ContainerChart