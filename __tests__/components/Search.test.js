import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Search from '../../src/components/Search';

// component renders
describe('Search component', () => {
  test('renders', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true)
  })
})


//testing input text
test('user text is echoed ', () => {
  const wrapper = shallow(<Search performSearch={() => { }} />)
  wrapper.find('input').simulate('change', {
    target: { value: 'hello' }
  })

  // assertion
  expect(wrapper.find('input').props().value).toEqual('hello')
})



