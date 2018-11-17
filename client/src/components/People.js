import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ReactTable from 'react-table';
import CharacterFrequency from './CharacterFrequency';
import { Grid, Row, Col } from 'react-bootstrap';

const Logo = () => (
  <div>
    <img src="/logo.svg" alt="logo" style={{ width: '500px' }} />
    <h1>SalesLoft Developer Interview Kit</h1>
  </div>
);

const columns = [
  {
    Header: 'Name',
    accessor: 'display_name' // String-based value accessors!
  },
  {
    Header: 'Email',
    accessor: 'email_address'
  },
  {
    Header: 'Job Title',
    accessor: 'title'
  }
];

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get('/api/people').then(data => {
      let people = data.data.data;

      this.setState({
        people: people
      });
    });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid centered">
          <Col xs={12} md={12} lg={12}>
            <Logo />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={4} md={4} lg={6}>
            <CharacterFrequency className="hidden" people={this.state.people} />
          </Col>
          <Col xs={4} md={4} lg={6}>
            <ReactTable data={this.state.people} columns={columns} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default People;
