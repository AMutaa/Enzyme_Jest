import React, { Component } from 'react'

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


Search.proptypes = {
  performSearch: PropTypes.func,
  articles: PropsTypes.array
}
export default Search
