import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ articles = [] }) => (
  <ul>
    {articles.map(({ webUrl, webTitle }) => (
      <li>
        <a href={webUrl} target='_blank' rel='noopener noreferrer'>
          {webTitle}
        </a>
      </li>
    ))}
  </ul>
)

SearchResults.PropTypes = {
  articles: PropTypes.array
}

export default SearchResults