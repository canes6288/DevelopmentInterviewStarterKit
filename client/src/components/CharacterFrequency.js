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
  border 2px solid #DCDCDC;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #000000
  background-color: #FFFFFF;
`;

const columns = [
  {
    Header: 'Character',
    accessor: 'character'
  },
  {
    Header: 'Frequency',
    accessor: 'frequency'
  }
];

class CharacterFrequency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFrequencyTable: false
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick() {
    this.setState({
      showFrequencyTable: true
    });
  }

  render() {
    const CharacterFrequencyButton = () => (
      <Button className={this.state.showFrequencyTable ? 'hidden' : ''}>
        <div
          onClick={this.handleIndexClick}
          role="show email character frequency table"
          style={{
            textDecoration: 'none',
            color: '#000000',
            cursor: 'pointer'
          }}
        >
          Show Email Character Frequency
        </div>
      </Button>
    );

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

    return (
      <div>
        <CharacterFrequencyButton />
        <ReactTable
          className={this.state.showFrequencyTable ? '' : 'hidden'}
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default CharacterFrequency;
