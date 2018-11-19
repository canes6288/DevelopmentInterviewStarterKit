import React from 'react';
import ReactTable from 'react-table';
import Button from './Button';

const columns = [
  {
    Header: 'Email',
    accessor: 'emailAddress'
  },
  {
    Header: "User's Phone Number",
    accessor: 'phone'
  },
  {
    Header: 'Duplicate Phone Number',
    accessor: 'duplicateNumber'
  }
];

function isExactDuplicate(
  personsPhone,
  potentialDuplicatePhone,
  allPhoneNumbers
) {
  let numberOfOccurences = 0;

  if (personsPhone == potentialDuplicatePhone) {
    numberOfOccurences = allPhoneNumbers.filter(function(phone) {
      return phone == personsPhone;
    });
  }

  return numberOfOccurences.length > 1;
}

function isLikelyDuplicate(personsPhone, potentialDuplicatePhone) {
  if (personsPhone == potentialDuplicatePhone) {
    return false;
  }

  let numberOfMatchedDigits = 0;

  for (var i = 0; i < personsPhone.length; i++) {
    if (personsPhone[i] === potentialDuplicatePhone[i]) {
      numberOfMatchedDigits++;
    }
  }

  return numberOfMatchedDigits >= personsPhone.length - 3;
}

function isPotentialDuplicate(
  personsPhone,
  potentialDuplicatePhone,
  allPhoneNumbers
) {
  return (
    isExactDuplicate(personsPhone, potentialDuplicatePhone, allPhoneNumbers) ||
    isLikelyDuplicate(personsPhone, potentialDuplicatePhone)
  );
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

    const duplicates = [];

    people.forEach(function(person) {
      const emailAddress = person.email_address;
      const phone = person.phone.replace(/\D/g, '');

      allPhoneNumbers.forEach(function(potentialDuplicatePhone) {
        if (
          isPotentialDuplicate(phone, potentialDuplicatePhone, allPhoneNumbers)
        ) {
          duplicates.push({
            emailAddress: emailAddress,
            phone: phone,
            duplicateNumber: potentialDuplicatePhone
          });
        }
      });
    });

    return (
      <div>
        <div data-testid="duplicate-button">
          <Button
            onClick={this.handleIndexClick}
            className={this.state.showDuplicateTable ? 'hidden' : ''}
            text="Show Potential Duplicates based on Phone Numbers"
          />
        </div>
        <div data-testid="duplicate-table">
          <ReactTable
            className={this.state.showDuplicateTable ? '' : 'hidden'}
            data={duplicates}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}

export default DuplicateTable;
