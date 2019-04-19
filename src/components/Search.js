import React, { Component } from 'react';
import SearchResults from './SearchResults';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div>
          <SearchResults articles={this.props.articles} />
        </div>
      </div>
    )
  }
}


Search.propTypes = {
  performSearch: PropTypes.func,
  articles: PropTypes.array
}
export default Search
