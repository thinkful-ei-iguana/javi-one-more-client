import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import renderer from 'react-test-renderer'


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><WorkoutPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><WorkoutPage /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})