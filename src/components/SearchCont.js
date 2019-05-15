import React, { Component } from 'react';
import Search from '../components/Search';
import fetchArticles from '../api/api';

class SearchCont extends Component {
  state = {
    articles: []
  }

  performSearch = (event) => {
    return fetchArticles(event).then(data =>
      this.setState({ articles: data.response.articles })
    )
  }

  render() {
    return (
      <Search
        performSearch={this.performSearch}
        articles={this.state.articles}
      />
    )
  }
}

export default SearchCont

