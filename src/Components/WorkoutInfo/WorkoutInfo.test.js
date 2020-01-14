import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import WorkoutInfo from '../WorkoutInfo/WorkoutInfo';
import renderer from 'react-test-renderer'


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        match: { params: {} },
        history: {
          push: () => {}
        },
      }
    ReactDOM.render(<BrowserRouter><WorkoutInfo {...props} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})