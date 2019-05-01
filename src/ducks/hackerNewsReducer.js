import axios from 'axios'

let initialState = {
    loading: false,
    articles: []
}
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export const requestArticles = () => {
  let articles = axios.get('/api/hacker-news').then(res => res.data);
  return {
    type: REQUEST_ARTICLES,
    payload: articles
}
}
export default function reducer(state = initialState,action) {
    return state;
}