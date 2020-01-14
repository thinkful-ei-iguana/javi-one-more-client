import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer/Footer';
import renderer from 'react-test-renderer'


describe('add workout' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Footer /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
})