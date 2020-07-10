import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Header } from './Components/Layout/Header/Header';

it('should render CityDate', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find(Header);

  expect(header.exists()).toBe(true);
});
