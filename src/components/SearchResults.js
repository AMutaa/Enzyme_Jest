import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ articles = [] }) => (
  <ul>
    {articles.map(({ url, title }) => (
      <li key={title}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </li>
    ))}
  </ul>
)

SearchResults.propTypes = {
  articles: PropTypes.array
}

export default SearchResults