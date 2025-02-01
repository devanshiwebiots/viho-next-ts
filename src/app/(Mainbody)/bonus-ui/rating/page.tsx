"use client";
import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import HeartRatingClass from "../../../../Component/bonus-ui/Rating/HeartRating";
import ThumbsUpDownRatingClass from "../../../../Component/bonus-ui/Rating/ThumbsUpDownRating";
import Breadcrumbs from "@/CommonComponents/BreadCrumb";
import SimpleRatingBar from "@/Component/bonus-ui/Rating/SimpleRatingBar";
import MovingRating from "@/Component/bonus-ui/Rating/MovingRating";
import SquareRating from "@/Component/bonus-ui/Rating/SquareRating";
import PillRating from "@/Component/bonus-ui/Rating/PillRating";
import StarRating from "@/Component/bonus-ui/Rating/StarRating";
import ReverseRating from "@/Component/bonus-ui/Rating/ReverseRating";
import HalfStarRating from "@/Component/bonus-ui/Rating/HalfStarRating";

const RatingClass = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Rating" parent="Bonus Ui" title="Rating" />
      <Container fluid={true}>
        <Row>
          <SimpleRatingBar />
          <MovingRating />
          <SquareRating />
          <PillRating />
          <ReverseRating />
          <StarRating />
          <HalfStarRating />
          <ThumbsUpDownRatingClass />
          <HeartRatingClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RatingClass;
