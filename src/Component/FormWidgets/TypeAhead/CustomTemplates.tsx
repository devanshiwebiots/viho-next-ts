import CardHeaderCommon from "@/CommonComponents/CardHeaderCommon";
import { CustomTemplateData, OscarWinnerData } from "@/Data/FormWidget";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";

const CustomTemplates = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHeaderCommon title={`Custom templates`} description2={CustomTemplateData} />
        <CardBody>
          <div id="custom-templates">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead options={OscarWinnerData} placeholder="Oscar winners" id="Custom Templates"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomTemplates;
