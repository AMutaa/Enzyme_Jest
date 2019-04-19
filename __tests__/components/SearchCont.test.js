import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchCont from '../../src/components/SearchCont';
import Search from '../../src/components/Search';


jest.mock('../../api/')

//component renders
describe('Search container', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchContainer />)
    expect(wrapper.exists()).toBe(true)
  })
})