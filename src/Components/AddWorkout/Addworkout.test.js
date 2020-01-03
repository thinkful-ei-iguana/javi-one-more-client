import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Addworkout from '../Addworkout/Addworkout';
import renderer from 'react-test-renderer'


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Addworkout /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Addworkout /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})