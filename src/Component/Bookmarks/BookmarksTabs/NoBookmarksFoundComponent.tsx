import { Col } from "reactstrap";
import { NoBookmarksFound } from "@/Constant";

const NoBookmarksFoundComponent = () => {
  return (
    <Col xl="12">
      <div className="no-favourite">
        <span>{NoBookmarksFound}</span>
      </div>
    </Col>
  );
};

export default NoBookmarksFoundComponent;
