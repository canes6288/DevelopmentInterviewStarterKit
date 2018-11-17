import React from 'react';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';

import ReactTable from 'react-table';

const Button = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

const columns = [
  {
    Header: 'Character',
    accessor: 'character' // String-based value accessors!
  },
  {
    Header: 'Frequency',
    accessor: 'frequency'
  }
];

class CharacterFrequency extends React.Component {
  render() {
    const { people } = this.props;

    const counter = {};

    people
      .map(person => person.email_address)
      .join('')
      .split('')
      .forEach(function(character) {
        counter[character] = counter[character] || 0;
        counter[character]++;
      });

    let data = Object.keys(counter).map(function(key) {
      return {
        character: key,
        frequency: counter[key]
      };
    });

    data = sortBy(data, ['frequency']).reverse();

    return <ReactTable data={data} columns={columns} />;
  }
}

export default CharacterFrequency;
