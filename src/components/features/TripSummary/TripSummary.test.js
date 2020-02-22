import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => { //error:  Cannot read property 'map' of undefined?
  it('should generate a link without crashing', () => {
    const expectedId = 'abc';
    console.log(expectedId);
    const component = shallow(<TripSummary id={expectedId} tags={['aa']}/>);
    expect (component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render a correct image and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'lorem';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={['aa']}/>);
    console.log(component.debug());
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days and cost', () => {
    const expectedName = 'ipsum';
    const expectedDays = 2;
    const expectedCost = '23';
    const component = shallow(<TripSummary name={expectedName} days={expectedDays} cost={expectedCost} tags={['aa']} />);
    console.log(component.debug());
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span:first-child').text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span:last-child').text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw an error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in a proper order', () => {
    const expectedArray = ['a', 'b', 'c'];
    const component = shallow(<TripSummary tags={expectedArray} />);
    console.log(component.debug());
    expect(component.find('.tag').at(0)).toEqual[expectedArray[0]];
    expect(component.find('.tag').at(1)).toEqual[expectedArray[1]];
    expect(component.find('.tag').at(2)).toEqual[expectedArray[2]];
  });

  {/*it('should not render tags if empty or false', () => {
    const component = shallow(<TripSummary tags={['']} />);
    console.log(component.debug());
    expect(component.find('.tags').exists()).toEqual(false); //
  });*/}
});
