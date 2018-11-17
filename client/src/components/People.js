import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ReactTable from 'react-table';
import CharacterFrequency from './CharacterFrequency';

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`;

const Logo = () => (
  <FlexBox>
    <img src="/logo.svg" alt="logo" />
    <h1>SalesLoft Developer Interview Kit</h1>
  </FlexBox>
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
      <div>
        <Logo />
        <CharacterFrequency className="hidden" people={this.state.people} />
        <ReactTable data={this.state.people} columns={columns} />
      </div>
    );
  }
}

export default People;
