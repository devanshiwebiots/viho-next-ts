import React, { Fragment } from 'react'
import ChartWidgets from './ChartWidget'
import BarChartsWidgets from './BarChartWidgets'
import { Row } from 'reactstrap'
import LiveChart from './LiveChart'
import { TurnoverChart } from '../WidgetApexChartData'
import MonthlySaleChart from './MonthlySaleChart'
import UsesChart from './UsesChart'
import BrowserChartWidgets from './BrowserChartWidgets'

const ContainerChart = () => {
  return (
    <Fragment>
        <ChartWidgets />
        <BarChartsWidgets />
        <Row>
          <LiveChart />
          <TurnoverChart />
          <MonthlySaleChart />
          <UsesChart />
        </Row>
        <BrowserChartWidgets />
    </Fragment>
  )
}

export default ContainerChart