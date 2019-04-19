import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import SearchCont from '../../src/components/SearchCont';
import Search from '../../src/components/Search';
import fetchArticles from '../../src/api/__mocks__';


jest.mock('../../src/api/api/')

//component renders
describe('Search container', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchCont />)
    expect(wrapper.exists()).toBe(true)
  })

  // check if SearchCont has Search component as a child
  test('should render Search component', () => {
    const wrapper = mount(<SearchCont />);
    expect(wrapper.children(Search).length).toEqual(1)
  })



  // using our mock here
  test('should update articles state', () => {
    const wrapper = mount(<SearchCont />)
    expect(wrapper.state().articles).toEqual([]);

    const { performSearch } = wrapper.find(Search).props();

    return performSearch().then(() => {
      expect(wrapper.state().articles).toHaveLength(10);
    })
  })
})
