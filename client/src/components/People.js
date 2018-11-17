import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

import ReactTable from "react-table";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

const Logo = () => (
  <FlexBox>
    <img src="/logo.svg" />
    <h1>SalesLoft Developer Interview Kit</h1>
  </FlexBox>
)

const columns = [{
    Header: 'Name',
    accessor: 'display_name' // String-based value accessors!
  }, {
    Header: 'Email',
    accessor: 'email_address'
  }, {
    Header: 'Job Title',
    accessor: 'title'
  }]

class PeopleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get('/api/people')
    .then(data => {
      let people = data.data.data

      this.setState({
        people: people
      });
    })
  }

  render() {
    return(
      <ReactTable
        data={this.state.people}
        columns={columns}
      />
    )
  }
}

export const People = () => (
  <div>
    <Logo />
    <PeopleList />
  </div>
);
