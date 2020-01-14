import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutList from '../WorkoutList/WorkoutList';
import renderer from 'react-test-renderer'


describe('GET /workouts' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorkoutList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<WorkoutList />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })
 

})
