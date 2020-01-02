import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutList from '../WorkoutList/WorkoutList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkoutList />, div);
  ReactDOM.unmountComponentAtNode(div);
});