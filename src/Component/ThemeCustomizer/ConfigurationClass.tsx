import React, { Fragment } from 'react';
import { Container, Modal, ModalBody, ModalHeader, ModalFooter, Row, Button } from 'reactstrap';
import { Configuration, CopyText, Cancel } from '../../Constant';
import { ConfigDB } from '@/config/ThemeConfig';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ConfigurationClass = ({ toggle, modal }: any) => {
  const configDB = ConfigDB.data;
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={toggle} className='modal-body' centered={true}>
        <ModalHeader toggle={toggle}>{Configuration}</ModalHeader>
        <ModalBody>
          <Container fluid={true} className='bd-example-row'>
            <Row>
              <p>{'To replace our design with your desired theme. Please do configuration as mention'} </p>
              <p>
                <b> {'Path : data > customizer > config.jsx '}</b>{' '}
              </p>
            </Row>
            <pre>
              <code>
                <div> {'export class ConfigDB '}&#123;</div>
                <div> {'static data'} = &#123;</div>
                <div> {'settings'}&#58; &#123;</div>
                <div>
                  {'layout_type'}&#58; '{configDB.settings.layout_type}',
                </div>
                <div> {'sidebar'}&#58; &#123;</div>
                <div>
                  {'type'}&#58; '{configDB.settings.sidebar.type}',
                </div>
                <div> &#125;,</div>
                <div>
                  {'sidebar_setting'}&#58; '{configDB.settings.sidebar_setting}',{' '}
                </div>
                <div> &#125;,</div>
                <div> {'color'}&#58; &#123;</div>
                <div>
                  {'primary_color'}&#58; '{configDB.color.primary_color}',{' '}
                </div>
                <div>
                  {'secondary_color'}&#58; '{configDB.color.secondary_color}',{' '}
                </div>
                <div>
                  {'mix_background_layout'}&#58; '{configDB.color.mix_background_layout}',{' '}
                </div>
                <div> &#125;,</div>
                <div> &#125;</div>
                <div> &#125;</div>
              </code>
            </pre>
          </Container>
        </ModalBody>
        <ModalFooter>
          <CopyToClipboard text={JSON.stringify(configDB)}>
            <Button
              color='primary'
              className='notification'
              onClick={() =>
                toast.success('Code Copied to clipboard !', {
                  position: toast.POSITION.BOTTOM_RIGHT,
                })
              }>
              {CopyText}
            </Button>
          </CopyToClipboard>
          <Button color='secondary' onClick={toggle}>
            {Cancel}
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfigurationClass;
