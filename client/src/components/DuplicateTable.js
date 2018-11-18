import React from 'react';
import ReactTable from 'react-table';
import Button from './Button';

const columns = [
  {
    Header: 'User ID',
    accessor: 'userId'
  },
  {
    Header: "User's Phone Number",
    accessor: 'phone'
  },
  {
    Header: 'Duplicate Phone Number',
    accessor: 'phone'
  }
];

function isPotentialDuplicate(phone, otherPhoneNumber) {
  let numberOfMatchedDigits = 0;

  for (var i = 0; i < phone.length; i++) {
    if (phone[i] === otherPhoneNumber[i]) {
      numberOfMatchedDigits++;
    }
  }

  return numberOfMatchedDigits >= phone.length - 3;
}

class DuplicateTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDuplicateTable: false
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick() {
    this.setState({
      showDuplicateTable: true
    });
  }

  render() {
    const { people } = this.props;

    let allPhoneNumbers = people
      .map(person => person.phone)
      .map(phoneNumber => phoneNumber.replace(/\D/g, ''));

    const duplicates = {};

    people.forEach(function(person) {
      let userId = person.id;
      let phone = person.phone.replace(/\D/g, '');

      allPhoneNumbers.forEach(function(otherPhoneNumber) {
        if (phone != otherPhoneNumber) {
          if (isPotentialDuplicate(phone, otherPhoneNumber)) {
            duplicates.userId = userId;
            duplicates.phone = phone;
            duplicates.duplicateNumber = otherPhoneNumber;
          }
        }
      });
    });

    let data = [duplicates];

    return (
      <div>
        <Button
          onClick={this.handleIndexClick}
          className={this.state.showDuplicateTable ? 'hidden' : ''}
          text="Show Potential Duplicates based on Phone Numbers"
        />
        <ReactTable
          className={this.state.showDuplicateTable ? '' : 'hidden'}
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default DuplicateTable;
