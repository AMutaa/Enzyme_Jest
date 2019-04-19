import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchResults from '../../src/components/SearchResults';

const mockArticles = [
  {
    url: 'http://google.com',
    title: 'This is google'
  }
]

//Snapshot testing
describe('SearchResults component', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchResults articles={mockArticles} />)
    expect(wrapper).toMatchSnapshot();
  })
})

//empty array of articles, component still renders
test('returns the default empty array when there is no data to map through', () => {
  const wrapper = shallow(<SearchResults />);
  expect(wrapper).toMatchSnapshot();
})

//no break without articles
test('does not break without articles', () => {
  const wrapper = shallow(<SearchResults />);
  expect(wrapper.find('li')).toHaveLength(0);
})

test('does not break with an empty array', () => {
  const wrapper = shallow(<SearchResults articles={[]} />);
  expect(wrapper.find('li')).toHaveLength(0);
})
