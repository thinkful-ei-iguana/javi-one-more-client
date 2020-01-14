import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage';
import renderer from 'react-test-renderer'


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><LandingPage /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})