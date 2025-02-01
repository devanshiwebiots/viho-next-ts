'use client';

import React, { Fragment } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

const Maintenance = () => {
  return (
    <Fragment>
      <section className='maintenance-sec'>
        <div className='page-wrapper'>
          <div className='error-wrapper maintenance-bg'>
            <Container>
              <ListGroup className='maintenance-icons flex-row'>
                <ListGroupItem>
                  <i className='fa fa-cog'></i>
                </ListGroupItem>
                <ListGroupItem>
                  <i className='fa fa-cog'></i>
                </ListGroupItem>
                <ListGroupItem>
                  <i className='fa fa-cog'></i>
                </ListGroupItem>
              </ListGroup>
              <div className='maintenance-heading'>
                <h2 className='headline'>MAINTENANCE</h2>
              </div>
              <h4 className='sub-content'>
                Our Site is Currently under maintenance We will be back Shortly
                <br />
                Thank You For Patience
              </h4>
              <div>
                <a className='btn btn-primary btn-lg text-light' href='index.html'>
                  BACK TO HOME PAGE
                </a>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Maintenance;
