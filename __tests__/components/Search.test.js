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


//form is submitted, event cancelled(default browser function isn't fired)
test('when the form is submitted the event is cancelled', () => {
  const wrapper = shallow(<Search />);
  let prevented = false;
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
      prevented = true;
    }
  })
  expect(prevented).toBe(true)
})

// renders search result when the articles state changes
test('renders search results when the articles change', () => {
  const wrapper = mount(<Search articles={[]} />)
  wrapper.setProps({
    articles: [{ url: 'http://google.com', title: 'Google Search' }]
  })
  expect(wrapper.find('a').prop('href')).toEqual('http://google.com')
})

