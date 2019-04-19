import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import SearchResults from '../../src/components/SearchResults';

const mockArticles = [
  {
    url: 'http://google.com',
    title: 'This is google'
  }
]

describe('SearchResults component', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchResults articles={mockArticles} />)
    expect(wrapper).toMatchSnapshot();
  })

})
