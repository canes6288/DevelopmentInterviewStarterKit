import React from 'react';

import { ConnectedNavBar } from '../containers/ConnectedNavBar';
import People from './People';
import { Grid, Row, Col } from 'react-bootstrap';

export const LandingPage = () => (
  <Grid>
    <Row className="nav-bar">
      <Col xs={12} md={12} lg={12}>
        <ConnectedNavBar />
      </Col>
    </Row>
    <Row className="body">
      <Col xs={6} md={6} lg={6}>
        <People />
      </Col>
    </Row>
  </Grid>
);
