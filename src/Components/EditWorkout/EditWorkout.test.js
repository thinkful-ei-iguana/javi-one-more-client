import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import EditWorkout from '../EditWorkout/EditWorkout';


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        match: { params: {} },
        history: {
          push: () => {}
        },
      }
    ReactDOM.render(<BrowserRouter><EditWorkout {...props}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})