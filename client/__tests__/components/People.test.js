import React from 'react';
import ReactDOM from 'react-dom';
import People from '../../src/components/People';

test('it mounts', () => {
  const div = document.createElement('div');
  ReactDOM.render(<People />, div);
});
