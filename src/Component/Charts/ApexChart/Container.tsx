import React from "react";
import ApexLineChartClass from "./ApexLineChart";
import AreaSpalineChartClass from "./AreaSpalineChart";
import BarChartClass from "./BarChart";
import BasicAreaChartClass from "./BasicAreaChartClass";
import BubbleChartClass from "./BubbleChart";
import CandlestickChartClass from "./CandlestickChart";
import ColumnChartClass from "./ColumnChart";
import DonutChartClass from "./DonutChart";
import MixedChartClass from "./MixedChart";
import PieChartClass from "./PieChart";
import RadarChartClass from "./RadarChart";
import RadialBarChartClass from "./RadialBarChart";
import SteplineChartClass from "./SteplineChart";
import { Row } from "reactstrap";

const ApexContainer = () => {
  return (
    <Row>
      <BasicAreaChartClass />
      <AreaSpalineChartClass />
      <BarChartClass />
      <ColumnChartClass />
      <BubbleChartClass />
      <SteplineChartClass />
      <ApexLineChartClass />
      <PieChartClass />
      <DonutChartClass />
      <MixedChartClass />
      <CandlestickChartClass />
      <RadarChartClass />
      <RadialBarChartClass />
    </Row>
  );
};

export default ApexContainer;
