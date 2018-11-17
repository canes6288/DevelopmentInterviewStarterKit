import React from 'react';
import sortBy from 'lodash/sortBy';
import ReactTable from 'react-table';
import Button from './Button';

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

class CharacterFrequencyTable extends React.Component {
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
        <Button
          onClick={this.handleIndexClick}
          className={this.state.showFrequencyTable ? 'hidden' : ''}
          text="Show Email Character Frequency"
        />
        <ReactTable
          className={this.state.showFrequencyTable ? '' : 'hidden'}
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default CharacterFrequencyTable;
