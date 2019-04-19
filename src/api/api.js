
const fetchArticles = (event) => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${event}&apiKey=595cd4bc2f8742a49aacce2aa3d1f446`
  ).then(response => response.json())
}

export default fetchArticles