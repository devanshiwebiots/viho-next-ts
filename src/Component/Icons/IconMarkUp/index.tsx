//@ts-nocheck
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Label, Input, Button } from 'reactstrap';

const IconMarkUp = ({ iTag, icons }: any) => {
  const featherIcons = require('feather-icons');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(iTag.iTag);
    toast.info("Code Copied to clipboard !", { position: "bottom-right", theme: "colored" });
  };

  const closeIconContainer = () => {
    document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'none';
  };

  if (iTag !== '' && icons !== '') {
    document.getElementsByClassName('icon-hover-bottom')[0].style.display = 'block';
  }

  return (
    <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
      <Container fluid>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => closeIconContainer()}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first">
              {icons.featherIcon ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: featherIcons.icons[icons.featherIcon].toSvg(icons.featherIcon),
                  }}
                />
              ) : (
                <i id="icon_main" className={icons.icon}></i>
              )}
            </div>
            <div className="icon-class">
              <Label className="icon-title"></Label>
              <span id="fclass1"></span>
            </div>
            <div className="icon-last icon-last">
              <Label className="icon-title">Markup</Label>
              <div className="form-inline">
                <div className="mb-0 form-group">
                  <Input type="text" className="inp-val m-r-10" defaultValue={iTag.iTag} id="input_copy" />
                    <Button
                      color="primary"
                      className="notification"
                      onClick={handleCopy}
                    >
                      Copy text
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};
export default IconMarkUp;
