import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import renderer from 'react-test-renderer'


describe('GET /workouts' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><WorkoutItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><WorkoutItem /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})