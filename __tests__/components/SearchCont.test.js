import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import SearchCont from '../../src/components/SearchCont';
import Search from '../../src/components/Search';


jest.mock('../../src/api/api')

//component renders
describe('Search container', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchCont />)
    expect(wrapper.exists()).toBe(true)
  })
})

test('should render Search component', () => {
  const wrapper = mount(<SearchCont />);

  expect(wrapper.children(Search).length).toEqual(1)
})
