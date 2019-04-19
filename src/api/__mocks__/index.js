const range = n => [...Array(n).keys()]

const fetchArticles = () => {
  return Promise.resolve({
    response: {
      articles: range(10).map(i => ({
        url: `https://abc${i}.com`,
        title: `Some Title ${i}`
      }))
    }
  });
}
export default fetchArticles