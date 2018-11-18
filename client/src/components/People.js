import React from 'react';
import axios from 'axios';

import ReactTable from 'react-table';
import CharacterFrequencyTable from './CharacterFrequencyTable';
import DuplicateTable from './DuplicateTable';
import { Grid, Row, Col } from 'react-bootstrap';
import Logo from './Logo';

const columns = [
  {
    Header: 'Name',
    accessor: 'display_name'
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
        <Row className="logo centered">
          <Col xs={12} md={12} lg={12}>
            <Logo />
          </Col>
        </Row>
        <Row className="tables">
          <Col xs={6} md={4} lg={4}>
            <ReactTable data={this.state.people} columns={columns} />
          </Col>
          <Col xs={6} md={4} lg={4}>
            <CharacterFrequencyTable
              className="hidden"
              people={this.state.people}
            />
          </Col>
          <Col xs={6} md={4} lg={4}>
            <DuplicateTable className="hidden" people={this.state.people} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default People;
