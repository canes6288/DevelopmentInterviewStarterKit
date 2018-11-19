import React from 'react';
import ReactDOM from 'react-dom';
import DuplicateTable from '../../src/components/DuplicateTable';

test('it mounts', () => {
  const div = document.createElement('div');
  const people = [{ phone: '1234567890' }, { phone: '1234567890' }];
  ReactDOM.render(<DuplicateTable className="hidden" people={people} />, div);
});
