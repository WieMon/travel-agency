import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component =shallow(<OrderOption type={'ipsum'} name={'lorem'} />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render the name without crashing', () => {

    const expectedName = 'lorem';
    const component = shallow(<OrderOption name={expectedName} type='text'/>);
    console.log(component.debug());
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});
